/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useState } from 'react';
import { IS_DEV } from './constants';
import { DecodingAttr, FetchPriorityAttr, ImageProps, LoadingAttr } from './types';

import generateSizes from './utils/generateSizes';
import generateSrcSet from './utils/generateSrcSet';

const Image: FC<ImageProps> = ({ alt, src = '', lazy = 'true', ...props }) => {
  const ext = src.slice(src.lastIndexOf('.') + 1);
  const [srcSet, setSrcSet] = useState(() =>
    (IS_DEV || ext === 'svg') ? undefined : generateSrcSet(src),
  );
  const [sizes, setSizes] = useState(() => ((IS_DEV || ext === 'svg') ? undefined : generateSizes()));

  const isLazy = lazy === 'true';
  const loading: LoadingAttr = IS_DEV ? 'eager' : isLazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = isLazy ? 'low' : 'high';
  const decoding: DecodingAttr = isLazy ? 'async' : 'auto';
  const srcAttr = src;

  const handleError = () => {
    // fallback to basic src if there are no responsive sizes for an image
    setSrcSet(undefined);
    setSizes(undefined);
  };

  return (
    <img
      // ⚠️ Firefox and Safari wants the loading attribute to be BEFORE the src, in order lazy loading to work
      // see https://github.com/facebook/react/issues/25883#issuecomment-1410060269
      loading={loading}
      srcSet={srcSet}
      sizes={sizes}
      decoding={decoding}
      // FIXME: remove this line when fetchPriority prop will be fixed
      // see https://github.com/facebook/react/issues/27233#issuecomment-2035176576
      // @ts-expect-error
      // eslint-disable-next-line react/no-unknown-property
      fetchpriority={fetchPriority}
      src={srcAttr}
      alt={alt}
      draggable="false"
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
