import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type LearningPathStageItem = {
  id: string;
  title: string;
  content: ReactNode;
  image?: StaticImageData;
  imageWidth: number | undefined;
  imageHeight: number | undefined;
};

export type LearningPathStagesSectionData = {
  title: string;
  description?: ReactNode;
  stages: LearningPathStageItem[];
};
