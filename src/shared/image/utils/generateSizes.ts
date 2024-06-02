import { DESKTOP_W, MOBILE_W, TABLET_W } from '@/shared/image/constants.ts';

/**
 * Generates responsive sizes for Img element, based on the env breakpoints
 * @returns {string} - Returns the sizes string
 */
const generateSizes = () => {
  return `(max-width: ${MOBILE_W}px) ${MOBILE_W}px, (max-width: ${TABLET_W}px) ${TABLET_W}px, ${DESKTOP_W}px`;
};

export default generateSizes;
