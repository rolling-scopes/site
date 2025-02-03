import { StaticImageData } from 'next/image';

import { COURSE_LINKS } from '@/shared/constants';
import { Language } from '@/shared/types';
import { CourseNamesKeys } from 'data';

type CourseLinks = typeof COURSE_LINKS;

export type CourseLinksValues = CourseLinks[keyof CourseLinks];

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
  wearecommunityUrl: string | null;
}>;

export type Course = {
  id: string;
  title: CourseNamesKeys;
  subTitle: string | null;
  descriptionUrl: CourseLinksValues;
  altTitle?: string;
  iconSrc: StaticImageData;
  secondaryIcon: StaticImageData;
  iconSmall: StaticImageData;
  startDate: string;
  registrationEndDate: string;
  language: Language;
  mode: 'online' | 'offline';
  detailsUrl: string;
  enroll: string | null;
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
