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
  TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse,
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
  | ExtractSectionName<TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse>;

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
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  linkUrl?: string | null;
  linkLabel?: string;
  disabledLinkLabel?: string;
  backgroundColor?: string;
};

export type LearningPathStageItem = {
  id: string;
  title: string;
  content: ReactNode;
  image?: StaticImageData;
};

export type LearningPathStagesSectionData = {
  title: string;
  description?: ReactNode;
  stages: LearningPathStageItem[];
};

export type VideoBlockSectionData = {
  title: string;
  url: string;
  videoTitle: string;
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
  }
  | {
    id: string;
    name: Extract<SectionName, 'learningPathStages'>;
    data: LearningPathStagesSectionData;
  }
  | {
    id: string;
    name: Extract<SectionName, 'videoBlock'>;
    data: VideoBlockSectionData;
  };

export type ApiCoursePageResponseSections = CoursePageResponse['items'][0]['fields']['sections'];
