import { readFileSync, rm } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { isNativeError } from 'node:util/types';
import sharp from 'sharp';

const BUILD_ASSETS_DIRNAME = join('build', 'assets');
const COMPRESS_QUALITY = 80;
const TABLET_RESIZE = 700;
const MOBILE_RESIZE = 500;
const RESIZE_VALUES = [TABLET_RESIZE, MOBILE_RESIZE];

/**
 * Checks whether image needs to be converted to webP or not
 * @param {string} name - The name of the image
 * @return {boolean}
 */
const noNeedToConvert = (name) => {
  return (
    name.includes('.html') || name.includes('.css') || name.includes('.js') || name.includes('.svg')
  );
};

/**
 * Reads all the files recursively and returns them in a list, for the given folder
 * @param {string} folderName - The folder name where the files needs to be red
 * @return {Promise<string[]>} - Returns the file list if it's success
 * @throws {Error} - Throws an error in case some error happens while reading the folder
 */
const getFileList = async (folderName) => {
  try {
    const path = resolve(folderName);
    const files = await readdir(path, { recursive: true });
    return files;
  } catch (e) {
    if (isNativeError(e))
      throw new Error(
        `😱 Oops... Something went really wrong, reading the image list! (${e.message})`,
      );
  }
};

/**
 * Converts all the given images to WebP format
 * @param {string} dir - The dirname where the images are stored
 * @param {string} name - The current image to process name
 * @param {number} quality - The quality for image to be compressed
 * @return {Promise<void>} - Returns void promise
 */
const convertToWebP = (dir, name, quality) => {
  if (noNeedToConvert(name)) return;

  const fullname = join(dir, name);
  const newFullname = fullname.slice(0, fullname.lastIndexOf('.')); // img.jpg -> img;
  const convertedFileName = `${newFullname}.webp`; // img -> img.webp;
  const isAlreadyWebp = name.endsWith('.webp');

  const img = sharp(readFileSync(fullname));
  img.toFormat('webp', { quality });

  if (isAlreadyWebp) {
    return img
      .toFile(fullname)
      .then(() => console.log('Compressed', fullname))
      .catch((e) => console.log('Failed compressing', fullname, e, 'skipping...'));
  }

  return img
    .toFile(convertedFileName)
    .then(() => console.log('Converted', fullname))
    .then(() => {
      // If we already have a webP image we don't want to delete it.
      // Only delete before conversion jpg, png etc...
      if (fullname !== convertedFileName) rm(fullname, () => {});
    })
    .catch((e) => console.log('Failed converting', fullname, e, 'skipping...'));
};

const convertImagesToWebp = (imgList) => {
  return Promise.allSettled(
    imgList.map((imgName) => convertToWebP(BUILD_ASSETS_DIRNAME, imgName, COMPRESS_QUALITY)),
  );
};

/**
 * Generates the 3 sizes of the same image for desktop, tablet and mobile
 * @param {string[]} imgList - The list of images to be processed
 */
const generateSizesForMultipleDevices = (imgList) => {
  imgList.map((imgName) => {
    const fullname = join(BUILD_ASSETS_DIRNAME, imgName);
    const fullnameNoExtension = fullname.slice(0, fullname.lastIndexOf('.')); // img.jpg -> img;
    const sharpImg = sharp(readFileSync(fullname));

    for (let i = 0; i < 2; i++) {
      const resizeValue = RESIZE_VALUES.at(i);
      const isTabletSize = i === 0;
      const outFIle = isTabletSize
        ? `${fullnameNoExtension}-medium.webp`
        : `${fullnameNoExtension}-small.webp`;

      sharpImg
        .resize(resizeValue)
        .toFile(outFIle)
        .then(() => console.log('Created multiple sizes', outFIle))
        .catch((e) => console.log('Failed creating multiple sizes', outFIle, e, 'skipping...'));
    }
  });
};

/**
 * Initializes the algorithm
 * @return {Promise<void>} - Returns nothing
 */
const init = async () => {
  await convertImagesToWebp(await getFileList(BUILD_ASSETS_DIRNAME));
  generateSizesForMultipleDevices(await getFileList(BUILD_ASSETS_DIRNAME));
};

void init();
