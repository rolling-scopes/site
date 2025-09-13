import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type GridItem = {
  id: string;
  variant: 'base' | 'mentorship';
  heading: string;
  content: ReactNode;
  icon: StaticImageData;
};

export type GridItemData = Omit<GridItem, 'id'>;

export type AboutCourseSectionData = {
  title: string;
  subTitle?: ReactNode;
  gridItems: GridItem[];
  registrationLinkText?: string;
  registrationClosedLinkText?: string;
};
