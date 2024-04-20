import { FC } from 'react';
import { MOBILE_W, TABLET_W } from '@/features/Image/constants.ts';
import {
  DecodingAttr,
  FetchPriorityAttr,
  ImageProps,
  LoadingAttr,
} from '@/features/Image/types.ts';

import './image.scss';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = 'true', ...props }) => {
  const srcNoExtension = src.slice(0, src.lastIndexOf('.'));
  const isLazy = lazy === 'true';
  const loading: LoadingAttr = isLazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = isLazy ? 'low' : 'high';
  const decoding: DecodingAttr = isLazy ? 'async' : 'auto';

  return (
    <picture {...props}>
      <source media={`(max-width: ${MOBILE_W}px)`} srcSet={`${srcNoExtension}-${MOBILE_W}.webp`} />
      <source media={`(max-width: ${TABLET_W}px)`} srcSet={`${srcNoExtension}-${TABLET_W}.webp`} />
      <img
        src={src}
        alt={alt}
        className="img"
        draggable="false"
        decoding={decoding}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default Image;
