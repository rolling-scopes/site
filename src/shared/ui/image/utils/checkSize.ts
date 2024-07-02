import { MIN_SIZE_BREAKPOINT } from '../constants';

const checkSize = async (imgUrl: string, width: number = MIN_SIZE_BREAKPOINT): Promise<boolean> => {
  if (imgUrl.includes('svg')) {
    return true;
  }

  return new Promise((resolve) => {
    const image = new Image();

    image.src = imgUrl;

    image.addEventListener('load', () => {
      // console.log(imgUrl, image.width);

      if (image.width < width) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export default checkSize;
