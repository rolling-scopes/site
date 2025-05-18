import { StaticImageData } from 'next/image';

export type CourseData = {
  normalizeName: string;
  name: string;
  logo: StaticImageData;
  startDate: string;
  url: string;
};

export type Font = {
  name: string;
  data: ArrayBuffer;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: 'normal' | 'italic';
};
