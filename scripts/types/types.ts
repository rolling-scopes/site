import { StaticImageData } from 'next/image';

export type CourseData = {
  normalizeName: string;
  name: string;
  logo: StaticImageData;
  startDate: string;
  url: string;
};
