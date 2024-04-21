import { colors, styles } from '../const/index.js';

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

export default paint;
