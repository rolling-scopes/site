const convertToWebp = (src: string) => {
  const srcLowCase = src.toLowerCase();

  if (
    srcLowCase.includes('svg')
    || srcLowCase.includes('base64')
    || srcLowCase.endsWith('.svg')
    || srcLowCase.endsWith('.webp')
  ) {
    return src;
  }
  return `${src.slice(0, src.lastIndexOf('.'))}.webp`;
};

export default convertToWebp;
