const checkSvg = (imgUrl: string) => {
  console.log(imgUrl);
  if (imgUrl.endsWith('.svg')) {
    return true;
  }
  return false;
};

export default checkSvg;
