import { readFileSync, readdirSync, rm, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';
import { optimize } from 'svgo';
import { BUILD_ASSETS_DIRNAME, COMPRESS_QUALITY, RESIZE_VALUES } from './lib/const/index.js';
import {
  logCompressed,
  logConverted,
  logError,
  logVariant,
  notImage,
  removeExtension,
} from './lib/utils/index.js';
import isSvg from './lib/utils/isSvg.js';

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
 * @param {string} imgName - The image that needs to be processed
 * @param {number} quality - The quality for image to be compressed
 * @return {Promise<string>} - Returns promise with the new converted file
 */
const convertCompressImageToWebp = async (imgName, quality) => {
  const fullname = join(BUILD_ASSETS_DIRNAME, imgName);
  const fullNameNoExtension = removeExtension(fullname);
  const imgNameNoExtension = removeExtension(imgName);

  const convertedImgFullname = `${fullNameNoExtension}.webp`;
  const convertedImgName = `${imgNameNoExtension}.webp`;
  const isAlreadyWebp = imgName.endsWith('.webp');

  const img = sharp(readFileSync(fullname));
  img.toFormat('webp', { quality });

  try {
    await img.toFile(convertedImgFullname);

    if (isAlreadyWebp) {
      logCompressed(imgName);
      return convertedImgName;
    }

    await rm(fullname, () => {});
    logConverted(imgName);
    return convertedImgName;
  } catch (e) {
    logError(fullname, e);
  }
};

/**
 * Generates 2 more sizes of the same image for tablet and mobile
 * @param {string} imgName - The image to be processed
 * @return {void} - Returns nothing
 */
const generateSizesForMultipleDevices = async (imgName) => {
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
};

/**
 * Compresses the svg file using the SVGO API
 * @param svg {string} - The svg file that needs to be processed
 * @return {void} - Return nothing
 */
const compressSvg = (svg) => {
  const svgFullPath = join(BUILD_ASSETS_DIRNAME, svg);

  const result = optimize(readFileSync(svgFullPath, { encoding: 'utf8' }), {
    path: svgFullPath,
    multipass: true,
  });

  const optimizedSvgString = result.data;
  writeFileSync(svgFullPath, optimizedSvgString);
  logCompressed(svg);
};

/**
 * Initializes the algorithm
 * @return {Promise<void>} - Returns nothing
 */
const init = async () => {
  getImgList(BUILD_ASSETS_DIRNAME).map(async (img) => {
    if (isSvg(img)) {
      compressSvg(img);
      return;
    }

    if (notImage(img)) {
      return;
    }

    const webpImage = await convertCompressImageToWebp(img, COMPRESS_QUALITY);
    generateSizesForMultipleDevices(webpImage);
  });
};

void init();
