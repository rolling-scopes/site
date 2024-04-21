/* eslint-disable no-undef */
import { readFileSync, readdirSync, rm } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const BUILD_ASSETS_DIRNAME = join('build', 'assets');
const COMPRESS_QUALITY = Number(process.env.VITE_COMPRESS_QUALITY);
const TABLET_RESIZE = Number(process.env.VITE_TABLET);
const MOBILE_RESIZE = Number(process.env.VITE_MOBILE);
const RESIZE_VALUES = [TABLET_RESIZE, MOBILE_RESIZE];

/**
 * Removes the extension from the given filename
 * @param {string} filename - The filename that needs to be processed
 * @return {string} - Returns the filename without the extension
 * @example removeExtension('img.jpt') // img.jpg -> img;
 */
const removeExtension = (filename) => filename.slice(0, filename.lastIndexOf('.'));

/**
 * Checks whether image needs to be converted to webP or not
 * @param {string} name - The name of the image
 * @return {boolean}
 */
const notImage = (name) => {
  return (
    name.includes('.html') || name.includes('.css') || name.includes('.js') || name.includes('.svg')
  );
};

/**
 * Reads all the files recursively and returns them in a list, for the given folder
 * @param {string} dir - The folder name where the files needs to be red
 * @return {string[]} - Returns the file list if it's success
 * @throws {Error} - Throws an error in case some error happens while reading the folder
 */
const getImgList = (dir) => {
  const path = resolve(dir);
  return readdirSync(path, { recursive: true });
};

/**
 * Converts all the given images to WebP format
 * @param {string[]} imgList - The list of images that needs to be processed
 * @param {string} dir - The dirname where the images are stored
 * @param {number} quality - The quality for image to be compressed
 * @return {Promise} - Returns promise
 */
const convertCompressImagesToWebp = (imgList, dir, quality) => {
  return Promise.allSettled(
    imgList.map((imgName) => {
      if (notImage(imgName)) return;

      const fullname = join(BUILD_ASSETS_DIRNAME, imgName);
      const newFullname = removeExtension(fullname);
      const convertedFileName = `${newFullname}.webp`;
      const isAlreadyWebp = imgName.endsWith('.webp');

      const img = sharp(readFileSync(fullname));
      img.toFormat('webp', { quality });

      if (isAlreadyWebp) {
        // If image is already a WebP image - only apply compression
        return img
          .toFile(fullname)
          .then(() => console.log('Compressed', fullname))
          .catch((e) => console.log('Failed compressing', fullname, e, 'skipping...'));
      }

      return img
        .toFile(convertedFileName)
        .then(() => console.log('Converted', fullname))
        .then(() => rm(fullname, () => {}))
        .catch((e) => console.log('Failed converting', fullname, e, 'skipping...'));
    }),
  );
};

/**
 * Generates 2 more sizes of the same image for tablet and mobile
 * @param {string[]} imgList - The list of images to be processed
 * @return {void} - Returns nothing
 */
const generateSizesForMultipleDevices = (imgList) => {
  imgList.map(async (imgName) => {
    if (notImage(imgName)) return;

    const fullname = join(BUILD_ASSETS_DIRNAME, imgName);
    const fullnameNoExtension = removeExtension(fullname);
    const sharpImg = sharp(readFileSync(fullname));

    const { width: imgWidth } = await sharpImg.metadata();

    RESIZE_VALUES.forEach((size) => {
      const isImageAlreadySmall = imgWidth <= size;
      if (isImageAlreadySmall) {
        return;
      }

      const outFIle = `${fullnameNoExtension}-${size}.webp`;
      sharpImg
        .resize(size)
        .toFile(outFIle)
        .then(() => console.log(`Created ${RESIZE_VALUES} size`, outFIle))
        .catch((e) => console.log('Failed creating multiple sizes', outFIle, e, 'skipping...'));
    });
  });
};

/**
 * Initializes the algorithm
 * @return {Promise<void>} - Returns nothing
 */
const init = async () => {
  await convertCompressImagesToWebp(
    getImgList(BUILD_ASSETS_DIRNAME),
    BUILD_ASSETS_DIRNAME,
    COMPRESS_QUALITY,
  );
  generateSizesForMultipleDevices(getImgList(BUILD_ASSETS_DIRNAME));
};

void init();
