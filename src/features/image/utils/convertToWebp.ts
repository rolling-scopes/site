const convertToWebp = (src: string) => {
  if (src.includes('svg')) return src;
  return `${src.slice(0, src.lastIndexOf('.'))}.webp`;
};

export default convertToWebp;
