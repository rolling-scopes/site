import paint from './paint.js';
import paintImgName from './paintImgName.js';

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

export default logVariant;
