/**
 * Checks whether the given image is svg or not
 * @param {string} img - The image file that needs to be checked
 * @return {boolean} - Returns true if the file is an svg, and false otherwise
 */
const isSvg = (img) => img.endsWith('.svg');

export default isSvg;
