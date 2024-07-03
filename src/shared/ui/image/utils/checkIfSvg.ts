const checkIfSvg = (imgUrl: string): boolean => {
  if (imgUrl.endsWith('.svg')) {
    return true;
  }
  return false;
};

export default checkIfSvg;
