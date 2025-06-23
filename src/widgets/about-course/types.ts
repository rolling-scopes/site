import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type GridItem = {
  id: string;
  heading: string;
  content: ReactNode;
  icon: StaticImageData;
};

export type AboutCourseSectionData = {
  title: string;
  subTitle?: ReactNode;
  gridItems: GridItem[];
  registrationLinkText?: string;
  registrationClosedLinkText?: string;
};
