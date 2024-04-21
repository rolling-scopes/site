/* eslint-disable no-undef */
import { readFileSync, readdirSync, rm } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const BUILD_ASSETS_DIRNAME = join('build', 'assets');
const COMPRESS_QUALITY = Number(process.env.VITE_COMPRESS_QUALITY);
const TABLET_RESIZE = Number(process.env.VITE_TABLET);
const MOBILE_RESIZE = Number(process.env.VITE_MOBILE);
const RESIZE_VALUES = [TABLET_RESIZE, MOBILE_RESIZE];

const styles = {
  bold: '\x1b[1m',
  italic: '\x1b[3m',
};

const colors = {
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  gray: '\x1b[90m',
};

/**
 * Paints the text in specified color & text style.
 * @param {string} text - The text that needs to bes styled.
 * @param {Object.<colors, string>} color - The color in what needs to paint the text.
 * @param {Object.<styles, string>} [style] - The style that needs to apply to the text.
 * @return {string} - Returns the modified string.
 */
const paint = (text, color, style) => {
  const textColor = colors[color];
  const textStyle = styles[style] ?? '';

  return `${textColor}${textStyle}${text}${colors.reset}`;
};

/**
 * Paints the image name
 * @param {string} name - The name of the image
 * @return {`${string}${string}`} - Returns painted image name
 */
const paintImgName = (name) => {
  const assetsDirname = `${BUILD_ASSETS_DIRNAME.replaceAll('\\', '/')}/`;
  return `${paint(assetsDirname, 'gray', 'italic')}${paint(name, 'cyan', 'italic')}`;
};

/**
 * Logs into the console image name with success compression
 * @param {string} imgName - The name of the image
 * @return {void} - Returns nothing
 */
const logCompressed = (imgName) => {
  console.log(paint('Compressed', 'green', 'bold'), paintImgName(imgName));
};

/**
 * Logs that the specified image successfully converted
 * @param {string} imgName - The name of the image
 * @return {void} - Returns nothing
 */
const logConverted = (imgName) => {
  console.log(paint('Converted', 'green', 'bold'), paintImgName(imgName));
};

/**
 * Logs into the console that the 2 responsive sizes successfully created
 * @param {number} size - Size that was created
 * @param {string} imgName - The image name that size is created for
 * @return {void} - Returns nothing
 */
const logVariant = (size, imgName) => {
  console.log(
    `${paint('Created', 'green')} ${paint(`${size}px`, 'yellow', 'bold')} variant for`,
    paintImgName(imgName),
  );
};

/**
 * Logs painted error into the console
 * @param {string} fullname - The name of the file that was processed while error occurred
 * @param {Error} error - The error object
 * @return {void} - Returns nothing
 */
const logError = (fullname, error) => {
  console.log(
    paint(`Something went really wrong! ${fullname} (${error}) skipping...`, 'red', 'italic'),
  );
};

/**
 * Removes the extension from the given filename
 * @param {string} filename - The filename that needs to be processed
 * @return {string} - Returns the filename without the extension
 * @example removeExtension('img.jpt') // img.jpg -> img;
 */
const removeExtension = (filename) => filename.slice(0, filename.lastIndexOf('.'));

/**
 * Checks if the given file is an image or not
 * @param {string} name - The name of the image
 * @return {boolean} - Returns true if the given name is not an image, false otherwise
 */
const notImage = (name) => {
  return (
    name.endsWith('.html') || name.endsWith('.css') || name.endsWith('.js') || name.endsWith('.svg')
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

      if (!isAlreadyWebp) {
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
