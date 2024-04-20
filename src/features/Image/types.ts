import { ImgHTMLAttributes } from 'react';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  lazy?: boolean;
};

export type LoadingAttr = ImgHTMLAttributes<HTMLImageElement>['loading'];
