import chalk from 'chalk';
import paintImgName from './paintImgName.js';

/**
 * Logs into the console image name with success compression
 * @param {string} imgName - The name of the image
 * @return {void} - Returns nothing
 */
const logCompressed = (imgName) => {
  console.log(chalk.green.bold('Compressed'), paintImgName(imgName));
};

export default logCompressed;
