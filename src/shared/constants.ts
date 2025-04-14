import { COURSE_TITLES } from '../../dev-data/courseTitles.data';

export const RS_INTRO_URL = 'https://www.youtube.com/embed/n4unZLVpnaU';
export const RS_FOUNDATION_YEAR = '2013';
export const RS_EMAIL = 'rolling.scopes@gmail.com';
export const TO_BE_DETERMINED = 'TBD';
export const REGISTRATION_WILL_OPEN_SOON = 'Registration will open soon!';
export const REGISTRATION_WILL_OPEN_SOON_RU = 'Регистрация откроется скоро!';
export const LABELS = {
  START_DATE: 'Course starts on:',
  START_DATE_SHORT: 'Start:',
  COURSE_LANGUAGE_EN: 'English',
  COURSE_LANGUAGE_RU: 'Russian',
  MENTOR_ACTIVITIES: 'Mentorship starts on:',
  MENTOR_ACTIVITIES_SEPARATOR: '-',
} as const;

export const PAGE_NAMES = {
  SCHOOL: 'school',
  COURSES: 'courses',
  COMMUNITY: 'community',
  MENTORSHIP: 'mentorship',
} as const;

// ⚠️ These links are used to identify courses from the API
export const COURSE_LINKS = {
  JS_EN: 'https://rs.school/courses/javascript',
  JS_RU: 'https://rs.school/courses/javascript-ru',
  JS_PRESCHOOL_RU: 'https://rs.school/courses/javascript-preschool-ru',
  REACT: 'https://rs.school/courses/reactjs',
  ANGULAR: 'https://rs.school/courses/angular',
  NODE: 'https://rs.school/courses/nodejs',
  AWS_FUNDAMENTALS: 'https://rs.school/courses/aws-fundamentals',
  AWS_CLOUD_DEVELOPER: 'https://rs.school/courses/aws-cloud-developer',
  AWS_DEVOPS: 'https://rs.school/courses/aws-devops',
};

export const KEY_CODES = { ESCAPE: 'Escape' } as const;

export const COURSE_SCHEDULE_LINKS = {
  [COURSE_TITLES.JS_PRESCHOOL_RU]: 'https://github.com/rolling-scopes-school/tasks/tree/master/stage0',
  [COURSE_TITLES.JS_EN]: 'https://github.com/rolling-scopes-school/js-fe-course-en',
  [COURSE_TITLES.JS_RU]: [
    'https://github.com/rolling-scopes-school/tasks/tree/master/stage1',
    'https://github.com/rolling-scopes-school/tasks/tree/master/stage2',
  ],
  [COURSE_TITLES.REACT]: null,
  [COURSE_TITLES.ANGULAR]: 'https://github.com/rolling-scopes-school/tasks/tree/master/angular',
  [COURSE_TITLES.NODE]: 'https://github.com/rolling-scopes-school/tasks/tree/master/node',
  [COURSE_TITLES.AWS_FUNDAMENTALS]: 'https://github.com/rolling-scopes-school/aws/tree/main/aws-fundamentals',
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: 'https://github.com/rolling-scopes-school/aws/tree/main/aws-developer',
  [COURSE_TITLES.AWS_DEVOPS]: 'https://github.com/rolling-scopes-school/tasks/tree/master/devops',
};

export const DOCUMENTATION_LINKS = {
  'RU': 'https://rs.school/docs/ru',
  'EN': 'https://docs.rs.school',
};
