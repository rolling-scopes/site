import { COURSE_TITLES } from './courseTitles.data.ts';
import { ROUTES } from '@/app/const';
import { SocialMediaProps } from '@/shared/ui/social-media-item';
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

export type Image = {
  href: string;
  alt: string;
};

export type MentorshipCourse = {
  id: number;
  title?: CourseTitle;
  iconSmall?: string;
  description?: string;
  lang: 'en' | 'ru';
  detailsUrl: MentorshipRoute;
  links: {
    icon: Image[];
    mentorDocs: string;
    courseDocs: string;
    social: SocialMediaProps[];
  };
  details: string[];
  activities: MentorActivities[];
};
