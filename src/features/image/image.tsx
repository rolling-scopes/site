import { FC } from 'react';
import { MOBILE_W, TABLET_W } from '@/features/image/constants.ts';
import {
  DecodingAttr,
  FetchPriorityAttr,
  ImageProps,
  LoadingAttr,
} from '@/features/image/types.ts';

import './image.scss';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = 'true', ...props }) => {
  const srcNoExtension = src.slice(0, src.lastIndexOf('.'));
  const isLazy = lazy === 'true';
  const loading: LoadingAttr = isLazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = isLazy ? 'low' : 'high';
  const decoding: DecodingAttr = isLazy ? 'async' : 'auto';

  return (
    <picture>
      <source media={`(max-width: ${MOBILE_W}px)`} srcSet={`${srcNoExtension}-${MOBILE_W}.webp`} />
      <source media={`(max-width: ${TABLET_W}px)`} srcSet={`${srcNoExtension}-${TABLET_W}.webp`} />
      <img
        // ⚠️ Firefox and Safari wants the loading attribute to be BEFORE the src, in order lazy loading to work
        // see https://github.com/facebook/react/issues/25883#issuecomment-1410060269
        loading={loading}
        src={src}
        alt={alt}
        className="img"
        draggable="false"
        decoding={decoding}
        fetchPriority={fetchPriority}
        {...props}
      />
    </picture>
  );
};

export default Image;
