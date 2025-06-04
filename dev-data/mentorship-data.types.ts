import { StaticImageData } from 'next/image';

import { COURSE_TITLES } from './course-titles.data';
import { ROUTES } from '@/shared/constants';
import { Language } from '@/shared/types';
import { SocialMediaProps } from '@/shared/ui/social-media-item';

export type MentorActivity = {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
  links?: ActivityLink[];
};

type ActivityLink = {
  href: string;
  linkTitle: string;
};

type CourseTitleKey = keyof typeof COURSE_TITLES;
export type CourseTitle = (typeof COURSE_TITLES)[CourseTitleKey];

export type MentorshipCourseTitles = Extract<
  CourseTitle,
  'JS / Front-end RU' | 'JS / Front-end EN' | 'Angular' | 'React'
>;

export type MentorshipLinks = {
  [Key in MentorshipCourseTitles]: MentorshipCourseRoute;
};

export type MentorshipDefaultRouteKeys = typeof ROUTES.MENTORSHIP;
type MentorshipDefaultRoute = `/${typeof ROUTES.MENTORSHIP}`;

export type MentorshipCourseRouteKeys =
  | typeof ROUTES.JS
  | typeof ROUTES.JS_RU
  | typeof ROUTES.REACT
  | typeof ROUTES.ANGULAR;

export type MentorshipCourseRoute = `${MentorshipDefaultRoute}/${MentorshipCourseRouteKeys}`;

export type MentorshipRoute = MentorshipDefaultRoute | MentorshipCourseRoute;

export type ImageLink = {
  href: StaticImageData;
  alt: string;
};

export type MentorshipDetailsType = {
  id: number;
  title: string;
  info: string;
};

export type MentorshipCourse = {
  id: number;
  title: CourseTitle;
  iconSmall: StaticImageData;
  description?: string;
  lang: Language;
  detailsUrl: MentorshipRoute;
  links: {
    icon: ImageLink[];
    mentorDocs?: string;
    courseDocs?: string;
    onboard?: SocialMediaProps[];
  };
  details: MentorshipDetailsType[];
  activitiesTitle: string;
  activities: MentorActivity[];
};
