import chalk from 'chalk';
import { BUILD_ASSETS_DIRNAME } from '../const/index.js';

/**
 * Paints the image name
 * @param {string} name - The name of the image
 * @return {`${string}${string}`} - Returns painted image name
 */
const paintImgName = (name) => {
  const assetsDirname = `${BUILD_ASSETS_DIRNAME.replaceAll('\\', '/')}/`;
  return `${chalk.gray.italic(assetsDirname)}${chalk.cyan.italic(name)}`;
};

export default paintImgName;
