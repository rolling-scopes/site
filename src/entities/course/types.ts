import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { API_COURSES_IDS_DICTIONARY } from '@/entities/course/constants';
import { COURSE_LINKS } from '@/shared/constants';
import {
  ApiResourceLocale,
  Language,
  TypeCourseSkeleton,
  TypeHomePageSkeleton,
} from '@/shared/types';
import {
  TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse,
} from '@/shared/types/contentful';
import { ExtractSectionName } from '@/shared/types/types';
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

export type CoursePageResponse = EntryCollection<
  TypeHomePageSkeleton,
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

export type SectionName =
  | ExtractSectionName<TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse>;

export type GridItem = {
  id: string;
  heading: string;
  content: ReactNode;
  icon: StaticImageData;
};

export type AboutCourseSectionData = {
  title: string;
  subTitle?: ReactNode;
  gridItems: GridItem[];
  registrationLinkText?: string;
  registrationClosedLinkText?: string;
};

export type MediaTextBlockSectionData = {
  title: string;
  content: ReactNode;
  image?: StaticImageData;
  isImageOnLeft: boolean;
  registrationLinkText?: string;
  registrationClosedLinkText?: string;
};

export type Section =
  | {
    id: string;
    name: Extract<SectionName, 'aboutCourse'>;
    data: AboutCourseSectionData;
  }
  | {
    id: string;
    name: Extract<SectionName, 'mediaTextBlock'>;
    data: MediaTextBlockSectionData;
  };

export type ApiCoursePageResponseSections = CoursePageResponse['items'][0]['fields']['sections'];
