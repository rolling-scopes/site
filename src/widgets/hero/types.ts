import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { PAGE_NAMES } from '@/shared/constants';

export type HeroProps = Omit<HeroSectionData, 'variant'>;

export type HeroSectionData = {
  variant: 'mentorship' | 'base';
  heading: string;
  subHeading?: ReactNode;
  topHeading?: string[];
  image?: StaticImageData;
};

export type PageName = {
  pageName: Extract<
    (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES],
    'mentorship' | 'community' | 'courses'
  >;
};
