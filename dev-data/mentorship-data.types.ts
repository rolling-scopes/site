import { StaticImageData } from 'next/image';
import { COURSE_TITLES } from './courseTitles.data';
import { ROUTES } from '@/core/const';
import { Language } from '@/shared/types';
import { SocialMediaProps } from '@/shared/ui/social-media-item';
import { Stage } from '@/widgets/member-activity/ui/stage-card';

export type MentorActivities = Pick<Stage, 'id' | 'title' | 'description' | 'links'>;

type CourseTitleKey = keyof typeof COURSE_TITLES;
export type CourseTitle = (typeof COURSE_TITLES)[CourseTitleKey];

export type MentorshipDefaultRouteKeys = typeof ROUTES.MENTORSHIP;
type MentorshipDefaultRoute = `/${typeof ROUTES.MENTORSHIP}`;

export type MentorshipCourseRouteKeys =
  | typeof ROUTES.JS
  | typeof ROUTES.JS_RU
  | typeof ROUTES.REACT
  | typeof ROUTES.ANGULAR;
type MentorshipCourseRoute = `${MentorshipDefaultRoute}/${MentorshipCourseRouteKeys}`;

export type MentorshipRoute = MentorshipDefaultRoute | MentorshipCourseRoute;

export type ImageLink = {
  href: StaticImageData;
  alt: string;
};

export type MentorshipDetails = {
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
  details: MentorshipDetails[];
  activities: MentorActivities[];
};
