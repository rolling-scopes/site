import { COURSE_TITLES } from './courseTitles.data';
import { ROUTES } from '@/app/const';
import { Language } from '@/shared/types';
import { Stage } from '@/widgets/member-activity/ui/stage-card';

export type MentorActivities = Pick<Stage, 'id' | 'title' | 'description' | 'links'>;

type CourseTitleKey = keyof typeof COURSE_TITLES;
export type CourseTitle = typeof COURSE_TITLES[CourseTitleKey];

export type MentorshipDefaultRouteKeys = typeof ROUTES.MENTORSHIP;
type MentorshipDefaultRoute = `/${typeof ROUTES.MENTORSHIP}`;

export type MentorshipCourseRouteKeys =
  typeof ROUTES.JS | typeof ROUTES.JS_RU | typeof ROUTES.REACT | typeof ROUTES.ANGULAR;
type MentorshipCourseRoute = `${MentorshipDefaultRoute}/${MentorshipCourseRouteKeys}`;

export type MentorshipRoute = MentorshipDefaultRoute | MentorshipCourseRoute;

export type ImageLink = {
  href: string;
  alt: string;
};

export type MentorshipCourse = {
  id: number;
  title?: CourseTitle;
  iconSmall?: string;
  description?: string;
  lang: Language;
  detailsUrl: MentorshipRoute;
  links: {
    icon: ImageLink[];
    mentorDocs: string;
    courseDocs: string;
  };
  details: string[];
  activities: MentorActivities[];
};