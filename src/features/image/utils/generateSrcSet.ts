import { DESKTOP_W, MOBILE_W, TABLET_W } from '@/features/image/constants.ts';

/**
 * Generates the srcset for the given src image, based on the env breakpoints
 * @param {string} src - An src value to generate the srcset from
 * @returns {string} - Returns the processed srcset
 */
const generateSrcSet = (src: string) => {
  const srcNoExtension = src.slice(0, src.lastIndexOf('.'));
  const srcSet = `${srcNoExtension}-${MOBILE_W}.webp ${MOBILE_W}w, ${srcNoExtension}-${TABLET_W}.webp ${TABLET_W}w, ${src} ${DESKTOP_W}w`;
  return srcSet;
};

export default generateSrcSet;
