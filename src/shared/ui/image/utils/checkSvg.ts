const checkSvg = (imgUrl: string) => {
  if (imgUrl.endsWith('.svg')) {
    return true;
  }
  return false;
};

export default checkSvg;
