import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type SliderData = {
  slides: ReactNode[];
};

export type SlideData = {
  variant: 'mentorship';
  title: string;
  subTitle?: string;
  content?: ReactNode[];
  icon: StaticImageData;
};
