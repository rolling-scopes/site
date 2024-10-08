import { COURSE_TITLES } from './courseTitles.data.ts';
import { ROUTES } from '@/app/const';
import { Stage } from '@/widgets/study-path/ui/stage-card';

type MentorActions = Pick<Stage, 'id' | 'title' | 'description' | 'links'>;

type CourseTitleKey = keyof typeof COURSE_TITLES;
export type CourseTitle = typeof COURSE_TITLES[CourseTitleKey];

type RoutesKey = keyof typeof ROUTES;
export type RouteName = typeof ROUTES[RoutesKey];

export type MentorshipCourse = {
  id: number;
  courseTitle: '' | CourseTitle;
  lang: 'en' | 'ru';
  pageUrl: RouteName;
  description: string[];
  mentorActivities: MentorActions[];
  mentorDocsUrl: string;
  courseDocsUrl: string;
  benefits: string[];
};
