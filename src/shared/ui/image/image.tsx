import { ImgHTMLAttributes } from 'react';
import NextImage, { StaticImageData } from 'next/image';
// import { convertToWebp } from '@/shared/helpers/convertToWebp.ts';
// import { generateSizes } from '@/shared/helpers/generateSizes.ts';
// import { generateSrcSet } from '@/shared/helpers/generateSrcSet.ts';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
  img: StaticImageData;
  width?: number;
  height?: number;
};

type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];

type FetchPriorityAttr = ImgHTMLAttributes<HTMLImageElement>['fetchPriority'];

type DecodingAttr = ImgHTMLAttributes<HTMLImageElement>['decoding'];

export const Image = ({ alt, img, lazy = true, ...props }: ImageProps) => {
  // const { src } = img;

  // const srcWebp = convertToWebp(src);
  const IS_DEV = process.env.NEXT_PUBLIC_DEV === 'true';

  // const [srcSet, setSrcSet] = useState(() => (IS_DEV ? undefined : generateSrcSet(srcWebp)));
  // const [sizes, setSizes] = useState(() => (IS_DEV ? undefined : generateSizes()));

  const loading: LoadingAttr = IS_DEV ? 'eager' : lazy ? 'lazy' : 'eager';
  const fetchPriority: FetchPriorityAttr = lazy ? 'low' : 'high';
  const decoding: DecodingAttr = lazy ? 'async' : 'auto';
  // const srcAttr = IS_DEV ? src : srcWebp;

  // console.log('sizes', sizes);

  // const isImageSvg = src
  //   ? src.toLowerCase().endsWith('.svg') || src.toLowerCase().includes('data:image/svg')
  //   : false;

  // const handleError = () => {
  //   // fallback to basic src if there are no responsive sizes for an image
  //   // setSrcSet(undefined);
  //   // setSizes(undefined);
  // };

  return (
    <NextImage
      loading={loading}
      // srcSet={srcSet}
      // sizes={sizes}
      decoding={decoding}
      fetchPriority={fetchPriority}
      src={img.src}
      alt={alt || ''}
      draggable="false"
      width={props.width || img.width}
      height={props.height || img.height}
      // onError={handleError}
      {...props}
    />
  );
};
