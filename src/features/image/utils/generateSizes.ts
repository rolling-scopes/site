import { MOBILE_W, TABLET_W } from '@/features/image/constants.ts';

/**
 * Generates responsive sizes for Img element, based on the env breakpoints
 * @returns {string} - Returns the sizes string
 */
const generateSizes = () => {
  return `(max-width: ${MOBILE_W}px) ${MOBILE_W}px, (max-width: ${TABLET_W}px) ${TABLET_W}px, 1280px`;
};

export default generateSizes;
