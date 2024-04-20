import { ImgHTMLAttributes } from 'react';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
};

export type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];

export type FetchPriorityAttr = ImgHTMLAttributes<HTMLImageElement>['fetchPriority'];

export type DecodingAttr = ImgHTMLAttributes<HTMLImageElement>['decoding'];
