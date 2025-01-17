import { ROUTES } from '@/core/const';
import { COURSE_TITLES, MentorshipCourseTitles, MentorshipLinks } from 'data';

export const mentorshipCourseTitles: MentorshipCourseTitles[] = [
  COURSE_TITLES.JS_RU,
  COURSE_TITLES.JS_EN,
  COURSE_TITLES.REACT,
  COURSE_TITLES.ANGULAR,
];

export const mentorshipLinks: MentorshipLinks = {
  [COURSE_TITLES.JS_RU]: `/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`,
  [COURSE_TITLES.JS_EN]: `/${ROUTES.MENTORSHIP}/${ROUTES.JS}`,
  [COURSE_TITLES.REACT]: `/${ROUTES.MENTORSHIP}/${ROUTES.REACT}`,
  [COURSE_TITLES.ANGULAR]: `/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`,
};
