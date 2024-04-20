import { FC, ImgHTMLAttributes } from 'react';

import './image.scss';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
};

type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];

const Image: FC<ImageProps> = ({ alt, src, lazy = true, ...props }) => {
  const srcPath = src ?? '';
  const srcNoExtension = srcPath.slice(0, srcPath.lastIndexOf('.'));
  const srcSet = `${srcPath} 1200w, ${srcNoExtension}-medium.webp 700w, ${srcNoExtension}-small.webp 500w`;
  const loading: LoadingAttr = lazy ? 'lazy' : 'eager';

  return <img {...props} loading={loading} srcSet={srcSet} alt={alt} className="img" />;
};

export default Image;
