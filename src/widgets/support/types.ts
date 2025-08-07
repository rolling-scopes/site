import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type SupportUsSectionData = {
  title?: string;
  content?: ReactNode;
  imageSrc?: StaticImageData;
  linkLabelLeft: string;
  linkUrlLeft: string;
  linkIconLeft: StaticImageData;
  linkLabelRight: string;
  linkUrlRight: string;
  linkIconRight: StaticImageData;
};
