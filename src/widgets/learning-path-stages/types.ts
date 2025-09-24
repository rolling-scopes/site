import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type LearningPathStageItemData = {
  title: string;
  content: ReactNode;
  image?: StaticImageData;
  imageWidth: number | undefined;
  imageHeight: number | undefined;
};
