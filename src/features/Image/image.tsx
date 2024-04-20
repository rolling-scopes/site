import { FC, ImgHTMLAttributes } from 'react';

import './image.scss';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
};

type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];

const Image: FC<ImageProps> = ({ alt, src, lazy = true, ...props }) => {
  const srcSet = `${src}-large 1200w ${src}-medium 700w ${src}-small 500w`;
  const loading: LoadingAttr = lazy ? 'lazy' : 'eager';

  return <img {...props} loading={loading} srcSet={srcSet} alt={alt} className="img" />;
};

export default Image;
