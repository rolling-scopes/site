import paint from './paint.js';
import paintImgName from './paintImgName.js';

/**
 * Logs that the specified image successfully converted
 * @param {string} imgName - The name of the image
 * @return {void} - Returns nothing
 */
const logConverted = (imgName) => {
  console.log(paint('Converted', 'green', 'bold'), paintImgName(imgName));
};

export default logConverted;
