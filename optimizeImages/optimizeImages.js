import { readFileSync, readdirSync, rm } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';
import { BUILD_ASSETS_DIRNAME, COMPRESS_QUALITY, RESIZE_VALUES } from './lib/const/index.js';
import {
  logCompressed,
  logConverted,
  logError,
  logVariant,
  notImage,
  removeExtension,
} from './lib/utils/index.js';

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
  const promiseQueue = imgList.map(async (imgName) => {
    if (notImage(imgName)) return;

    const fullname = join(BUILD_ASSETS_DIRNAME, imgName);
    const newFullname = removeExtension(fullname);
    const convertedFileName = `${newFullname}.webp`;
    const isAlreadyWebp = imgName.endsWith('.webp');

    const img = sharp(readFileSync(fullname));
    img.toFormat('webp', { quality });

    try {
      const compressedFile = await img.toFile(convertedFileName);

      if (isAlreadyWebp) {
        logCompressed(imgName);
        return compressedFile;
      }

      await rm(fullname, () => {});
      logConverted(imgName);
      return compressedFile;
    } catch (e) {
      logError(fullname, e);
    }
  });

  return Promise.allSettled(promiseQueue);
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

    RESIZE_VALUES.map(async (size) => {
      const isImageAlreadySmall = imgWidth <= size;
      if (isImageAlreadySmall) {
        return;
      }

      const outFIle = `${fullnameNoExtension}-${size}.webp`;
      try {
        await sharpImg.resize(size).toFile(outFIle);
        logVariant(size, imgName);
      } catch (e) {
        logError(fullname, e);
      }
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
