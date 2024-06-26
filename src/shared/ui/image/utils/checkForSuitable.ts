const checkForSuitable = (imgUrl: string, width: number = 430) => {
  const extention = imgUrl.slice(imgUrl.lastIndexOf('.') + 1);

  if (extention === 'svg') {
    return true;
  }

  const image = new Image();

  image.src = imgUrl;

  if (image.width <= width) {
    return true;
  }

  return false;
};

export default checkForSuitable;
