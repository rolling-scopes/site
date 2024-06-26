const checkForSuitable = (imgurl: string, width: number = 200) => {
  const ext = imgurl.slice(imgurl.lastIndexOf('.') + 1);

  if (ext === 'svg') {
    return true;
  }

  const img = new Image();

  img.src = imgurl;

  if (Number(img.src) <= width) {
    return true;
  }

  return false;
};

export default checkForSuitable;
