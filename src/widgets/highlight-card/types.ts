import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type PrincipleCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type HighlightCardData = {
  heading: string;
  content: ReactNode;
  icon: StaticImageData;
};
