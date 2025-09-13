import { MentorshipCourseTitles } from '@/entities/mentor/types';
import { ROUTES } from '@/shared/constants';
import { COURSE_TITLES } from 'data';

export const mentorshipCourseTitles: MentorshipCourseTitles[] = [
  COURSE_TITLES.JS_RU,
  COURSE_TITLES.JS_EN,
  COURSE_TITLES.REACT,
  COURSE_TITLES.ANGULAR,
];

export const mentorshipLinks: Record<MentorshipCourseTitles, string> = {
  [COURSE_TITLES.JS_RU]: `/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`,
  [COURSE_TITLES.JS_EN]: `/${ROUTES.MENTORSHIP}/${ROUTES.JS}`,
  [COURSE_TITLES.REACT]: `/${ROUTES.MENTORSHIP}/${ROUTES.REACT}`,
  [COURSE_TITLES.ANGULAR]: `/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`,
} as const;
