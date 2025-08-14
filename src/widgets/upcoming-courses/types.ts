import { StaticImageData } from 'next/image';

export type UpcomingCoursesSectionData = {
  title: string;
  imageSrc?: StaticImageData;
  linkLabel: string;
  linkUrl?: string;
};
