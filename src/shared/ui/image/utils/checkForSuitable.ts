import { MIN_SIZE_BREAKPOINT } from '../constants';

const checkForSuitable = (imgUrl: string, width: number = MIN_SIZE_BREAKPOINT) => {
  const extention = imgUrl.slice(imgUrl.lastIndexOf('.') + 1);

  if (extention === 'svg') {
    return true;
  }

  const image = new Image();

  image.src = imgUrl;

  if (image.width < width) {
    return true;
  }

  return false;
};

export default checkForSuitable;
