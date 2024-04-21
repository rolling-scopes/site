import paint from './paint.js';
import paintImgName from './paintImgName.js';

/**
 * Logs into the console image name with success compression
 * @param {string} imgName - The name of the image
 * @return {void} - Returns nothing
 */
const logCompressed = (imgName) => {
  console.log(paint('Compressed', 'green', 'bold'), paintImgName(imgName));
};

export default logCompressed;
