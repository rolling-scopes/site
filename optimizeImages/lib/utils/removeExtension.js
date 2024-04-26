/**
 * Removes the extension from the given filename
 * @param {string} filename - The filename that needs to be processed
 * @return {string} - Returns the filename without the extension
 * @example removeExtension('img.jpt') // img.jpg -> img;
 */
const removeExtension = (filename) => filename.slice(0, filename.lastIndexOf('.'));

export default removeExtension;
