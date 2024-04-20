import { FC } from 'react';
import { MOBILE_W, TABLET_W } from '@/features/Image/constants.ts';
import { ImageProps, LoadingAttr } from '@/features/Image/types.ts';

import './image.scss';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = true, ...props }) => {
  const srcNoExtension = src.slice(0, src.lastIndexOf('.'));
  const srcSet = `${src} 1200w, ${srcNoExtension}-${TABLET_W}.webp ${TABLET_W}w, ${srcNoExtension}-${MOBILE_W}.webp ${MOBILE_W}w`;
  const loading: LoadingAttr = lazy ? 'lazy' : 'eager';

  return <img {...props} loading={loading} srcSet={srcSet} alt={alt} className="img" />;
};

export default Image;
