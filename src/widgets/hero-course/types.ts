import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type HeroSectionData = {
  variant: 'mentorship' | 'base';
  heading: string;
  subHeading?: ReactNode | string;
  topHeading?: string[];
  image?: StaticImageData;
};
