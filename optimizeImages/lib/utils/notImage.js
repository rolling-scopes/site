/**
 * Checks if the given file is an image or not
 * @param {string} name - The name of the image
 * @return {boolean} - Returns true if the given name is not an image, false otherwise
 */
const notImage = (name) => {
  return name.endsWith('.css') || name.endsWith('.js');
};

export default notImage;
