const convertToWebp = (src: string) => {
  if (
    src.includes('svg') ||
    src.includes('base64') ||
    src.endsWith('.svg') ||
    src.endsWith('.webp')
  )
    return src;
  return `${src.slice(0, src.lastIndexOf('.'))}.webp`;
};

export default convertToWebp;
