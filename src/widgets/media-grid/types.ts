import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type MediaGridSectionData = {
  title: string;
  description: ReactNode;
  media: StaticImageData[];
};
