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
  TypeTrainingProgramWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeTrainingProgramWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';
import { TrainingProgramData } from '@/widgets/training-program/ui/training-program-section';
import type { Asset, EntryCollection } from 'contentful';
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

export type CoursePageTransformFunction = (
  assets: Asset<'WITHOUT_UNRESOLVABLE_LINKS', ApiResourceLocale>[] | undefined,
  section: TypeTrainingProgramWithoutUnresolvableLinksResponse,
) => Section;

export type SectionId =
  TypeTrainingProgramWithAllLocalesAndWithoutLinkResolutionResponse['sys']['contentType']['sys']['id'];

export type SectionData = TrainingProgramData;

export type Section = {
  id: SectionId;
  data: SectionData;
};

export type CoursePageSectionProps = {
  courseName: CourseNamesKeys;
  sectionData: TrainingProgramData;
};
