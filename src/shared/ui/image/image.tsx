/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, ImgHTMLAttributes, useState } from 'react';
import { IS_DEV } from '@/shared/constants.ts';
import { convertToWebp } from '@/shared/helpers/convertToWebp.ts';
import { generateSizes } from '@/shared/helpers/generateSizes.ts';
import { generateSrcSet } from '@/shared/helpers/generateSrcSet.ts';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: 'false' | 'true';
};

type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];

type FetchPriorityAttr = ImgHTMLAttributes<HTMLImageElement>['fetchPriority'];

type DecodingAttr = ImgHTMLAttributes<HTMLImageElement>['decoding'];

export const Image: FC<ImageProps> = ({ alt, src = '', lazy = 'true', ...props }) => {
  const srcWebp = convertToWebp(src);
  const [srcSet, setSrcSet] = useState(() => (IS_DEV ? undefined : generateSrcSet(srcWebp)));
  const [sizes, setSizes] = useState(() => (IS_DEV ? undefined : generateSizes()));

  const isLazy = lazy === 'true';
  const loading: LoadingAttr = IS_DEV ? 'eager' : isLazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = isLazy ? 'low' : 'high';
  const decoding: DecodingAttr = isLazy ? 'async' : 'auto';
  const srcAttr = IS_DEV ? src : srcWebp;

  const isImageSvg = src ? src.toLowerCase().endsWith('.svg') || src.toLowerCase().includes('data:image/svg') : false;

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
      srcSet={isImageSvg ? undefined : srcSet}
      sizes={isImageSvg ? undefined : sizes}
      decoding={decoding}
      // FIXME: remove this line when fetchPriority prop will be fixed
      // see https://github.com/facebook/react/issues/27233#issuecomment-2035176576
      // @ts-expect-error
      // eslint-disable-next-line react/no-unknown-property
      fetchpriority={fetchPriority}
      src={srcAttr}
      alt={alt}
      draggable="false"
      onError={isImageSvg ? undefined : handleError}
      {...props}
    />
  );
};
