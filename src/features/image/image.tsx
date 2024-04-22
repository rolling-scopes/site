import { FC, useState } from 'react';
import { IS_DEV } from '@/features/image/constants.ts';
import {
  DecodingAttr,
  FetchPriorityAttr,
  ImageProps,
  LoadingAttr,
} from '@/features/image/types.ts';
import convertToWebp from '@/features/image/utils/convertToWebp.ts';
import generateSizes from '@/features/image/utils/generateSizes.ts';
import generateSrcSet from '@/features/image/utils/generateSrcSet.ts';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = 'true', ...props }) => {
  const srcWebp = convertToWebp(src);
  const [srcSet, setSrcSet] = useState(() => generateSrcSet(srcWebp));

  const isLazy = lazy === 'true';
  const loading: LoadingAttr = isLazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = isLazy ? 'low' : 'high';
  const decoding: DecodingAttr = isLazy ? 'async' : 'auto';
  const sizes = generateSizes();

  const handleError = () => {
    // fallback to basic src if there are no responsive sizes for an image
    setSrcSet('');
  };

  return (
    <img
      // ⚠️ Firefox and Safari wants the loading attribute to be BEFORE the src, in order lazy loading to work
      // see https://github.com/facebook/react/issues/25883#issuecomment-1410060269
      loading={loading}
      srcSet={IS_DEV ? '' : srcSet}
      sizes={sizes}
      decoding={decoding}
      fetchPriority={fetchPriority}
      src={IS_DEV ? src : srcWebp}
      alt={alt}
      draggable="false"
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
