import { StaticImageData } from 'next/image';
import { COURSE_ALIASES } from '@/shared/constants';
import { CourseNamesKeys } from 'data';

type CourseAliases = typeof COURSE_ALIASES;

export type CourseAliasValues = CourseAliases[keyof CourseAliases];

export type ApiCoursesResponse = Readonly<{
  alias: string;
  description: string;
  descriptionUrl: string | null;
  discipline: {
    id: number;
    name: string;
  };
  endDate: string;
  fullName: string;
  id: number;
  name: string;
  registrationEndDate: string;
  startDate: string;
}>;

export type Course = {
  id: string;
  title: CourseNamesKeys;
  alias: CourseAliasValues;
  altTitle?: string;
  iconSrc: StaticImageData;
  secondaryIcon: StaticImageData;
  iconSmall: StaticImageData;
  startDate: string;
  registrationEndDate: string;
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
  'title' | 'language' | 'startDate' | 'detailsUrl' | 'registrationEndDate'
> & {
  iconSrc: StaticImageData;
};
