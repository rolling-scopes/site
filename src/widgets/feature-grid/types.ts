import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type FeatureItem = {
  id: string;
  variant: 'base' | 'mentorship';
  heading: string;
  content: ReactNode;
  icon: StaticImageData;
};

export type FeatureItemData = Omit<FeatureItem, 'id'>;

export type FeatureGridData = {
  gridItems: FeatureItem[];
};
