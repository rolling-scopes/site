import { FC, ImgHTMLAttributes } from 'react';

import './image.scss';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
};

type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];

const TABLET_W = import.meta.env.VITE_TABLET;
const MOBILE_W = import.meta.env.VITE_MOBILE;

const Image: FC<ImageProps> = ({ alt, src, lazy = true, ...props }) => {
  const srcPath = src ?? '';
  const srcNoExtension = srcPath.slice(0, srcPath.lastIndexOf('.'));
  // const srcSet = `${srcPath} 1200w, ${srcNoExtension}-medium.webp 768w, ${srcNoExtension}-small.webp 425w`;
  const srcSet = `${srcPath} 1200w, ${srcNoExtension}-${TABLET_W}.webp ${TABLET_W}w, ${srcNoExtension}-${MOBILE_W}.webp ${MOBILE_W}w`;
  const loading: LoadingAttr = lazy ? 'lazy' : 'eager';

  return <img {...props} loading={loading} srcSet={srcSet} alt={alt} className="img" />;
};

export default Image;
