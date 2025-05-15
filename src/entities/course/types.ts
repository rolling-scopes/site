import { StaticImageData } from 'next/image';

import { API_COURSES_IDS_DICTIONARY } from '@/entities/course/constants';
import { COURSE_LINKS } from '@/shared/constants';
import { ApiResourceLocale, Language, TypeCourseSkeleton } from '@/shared/types';
import type { EntryCollection } from 'contentful';
import { CourseNamesKeys } from 'data';

type CourseLinks = typeof COURSE_LINKS;

export type CourseLinksValues = CourseLinks[keyof CourseLinks];

export type CoursesScheduleResponse = Readonly<
  {
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
    personalMentoringStartDate: string | null;
    personalMentoringEndDate: string | null;
    wearecommunityUrl: string | null;
  }[]
>;

export type CoursesResponse = EntryCollection<
  TypeCourseSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;

export type Course = {
  id: string;
  title: string;
  subTitle: string | undefined;
  descriptionUrl: CourseLinksValues;
  altTitle?: string;
  iconSrc: StaticImageData;
  secondaryIcon: StaticImageData;
  iconSmall: StaticImageData;
  iconFooter: StaticImageData;
  startDate: string;
  scheduleUrl: string[] | null;
  registrationEndDate: string;
  language: Language;
  mode: 'online' | 'offline';
  detailsUrl: string;
  enroll: string | null;
  backgroundStyle: {
    backgroundColor: string;
    accentColor: string;
  };
  personalMentoringStartDate: string | null;
  personalMentoringEndDate: string | null;
};

export type CourseStatus = 'planned' | 'available' | 'upcoming';

export type CourseItemData = Pick<
  Course,
  'title' | 'language' | 'startDate' | 'detailsUrl' | 'registrationEndDate'
> & {
  iconSrc: StaticImageData;
};

export type ApiCoursesIds = (typeof API_COURSES_IDS_DICTIONARY)[CourseNamesKeys];
