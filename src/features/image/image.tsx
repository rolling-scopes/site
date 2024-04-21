import { FC, useState } from 'react';
import { MOBILE_W, TABLET_W } from '@/features/image/constants.ts';
import {
  DecodingAttr,
  FetchPriorityAttr,
  ImageProps,
  LoadingAttr,
} from '@/features/image/types.ts';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = 'true', ...props }) => {
  const srcNoExtension = src.slice(0, src.lastIndexOf('.'));
  const srcSetInitial = `${srcNoExtension}-${MOBILE_W}.webp ${MOBILE_W}w, ${srcNoExtension}-${TABLET_W}.webp ${TABLET_W}w, ${src} 1280w`;

  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [srcSet, setSrcSet] = useState(srcSetInitial);

  const isLazy = lazy === 'true';
  const loading: LoadingAttr = isLazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = isLazy ? 'low' : 'high';
  const decoding: DecodingAttr = isLazy ? 'async' : 'auto';
  const sizes = `(max-width: ${MOBILE_W}px) ${MOBILE_W}px, (max-width: ${TABLET_W}px) ${TABLET_W}px, 1280px`;

  const handleError = () => {
    setImgSrc(src);
    setSrcSet('');
  };

  return (
    <img
      // ⚠️ Firefox and Safari wants the loading attribute to be BEFORE the src, in order lazy loading to work
      // see https://github.com/facebook/react/issues/25883#issuecomment-1410060269
      loading={loading}
      srcSet={srcSet}
      sizes={sizes}
      decoding={decoding}
      fetchPriority={fetchPriority}
      src={imgSrc}
      alt={alt}
      draggable="false"
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
