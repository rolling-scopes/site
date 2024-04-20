import { readFileSync, rm } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { isNativeError } from 'node:util/types';
import sharp from 'sharp';

const BUILD_ASSETS_DIRNAME = join('build', 'assets');

/**
 * Checks whether image needs to be converted to webP or not
 * @param {string} name - The name of the image
 * @return {boolean}
 */
const noNeedToConvert = (name) => {
  return (
    name.includes('.webp') ||
    name.includes('.html') ||
    name.includes('.css') ||
    name.includes('.js') ||
    name.includes('.svg')
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
 * @param {string} name - The current image to proccess name
 * @return {Promise<void>} - Returns void promise
 */
const convertToWebP = (dir, name) => {
  if (noNeedToConvert(name)) return;

  const fullname = join(dir, name);
  const newFullname = fullname.slice(0, fullname.lastIndexOf('.')); // img.jpg -> img;
  const convertedFileName = `${newFullname}.webp`; // img -> img.webp;

  const i = sharp(readFileSync(fullname));
  i.toFormat('webp', { quality: 80 });

  return i
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
  return Promise.allSettled(imgList.map((imgName) => convertToWebP(BUILD_ASSETS_DIRNAME, imgName)));
};

/*
const compressImages = async (imgList) => {

};

const generateSizesForMultipleDevices = () => {};

 */

/**
 * Initializes the algorithm
 * @return {Promise<void>} - Returns nothing
 */
const init = async () => {
  const imageList = await getFileList(BUILD_ASSETS_DIRNAME);
  await convertImagesToWebp(imageList);
  console.log(imageList);
};

void init();
