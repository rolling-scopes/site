import { StaticImageData } from 'next/image';

export type HeroSectionData = {
  heading: string;
  subHeading?: string;
  topHeading?: string[];
  image?: StaticImageData;
};
