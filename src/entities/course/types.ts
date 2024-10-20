import { StaticImageData } from 'next/image';

export type Course = {
  id: string;
  title: string;
  altTitle?: string;
  iconSrc: StaticImageData;
  secondaryIcon: StaticImageData;
  iconSmall: StaticImageData;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  enroll: string;
  backgroundStyle: {
    backgroundColor: string;
    accentColor: string;
  };
};

export type CourseStatus = 'planned' | 'available' | 'upcoming';

export type CourseItemData = Pick<
  Course,
  'title' | 'language' | 'startDate' | 'detailsUrl' | 'iconSrc'
>;
