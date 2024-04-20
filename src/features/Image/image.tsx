import { FC } from 'react';
import { MOBILE_W, TABLET_W } from '@/features/Image/constants.ts';
import { ImageProps, LoadingAttr } from '@/features/Image/types.ts';

import './image.scss';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = true, ...props }) => {
  const srcNoExtension = src.slice(0, src.lastIndexOf('.'));
  const loading: LoadingAttr = lazy ? 'lazy' : 'eager';

  return (
    <picture {...props}>
      <source media={`(max-width: ${MOBILE_W}px)`} srcSet={`${srcNoExtension}-${MOBILE_W}.webp`} />
      <source media={`(max-width: ${TABLET_W}px)`} srcSet={`${srcNoExtension}-${TABLET_W}.webp`} />
      <img loading={loading} src={src} alt={alt} className="img" />
    </picture>
  );
};

export default Image;
