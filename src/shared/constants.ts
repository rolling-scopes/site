import type { ApiResourceLocale, Language } from '@/shared/types/types';

export const TO_BE_DETERMINED = 'TBD';
export const REGISTRATION_WILL_OPEN_SOON = 'Registration will open soon!';
export const REGISTRATION_WILL_OPEN_SOON_RU = 'Регистрация откроется скоро!';
export const UNKNOWN_API_ERROR = 'Unknown error, API request failed.';
export const YOUTUBE_API_MAX_RESULTS_PER_PAGE = 50;
/**
 * https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/links
 */
export const API_MAX_INCLUDE_DEPTH = 10;

export const COURSE_LANGUAGE_LABEL: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
} as const;

export const LABELS = {
  'en-US': {
    START_DATE: 'Course starts on:',
    START_DATE_SHORT: 'Start:',
    REGISTRATION_END: 'Enroll until:',
    MENTOR_ACTIVITIES: 'Mentorship starts on:',
    MENTOR_ACTIVITIES_SEPARATOR: '-',
  },
  'ru': {
    START_DATE: 'Начало курса:',
    START_DATE_SHORT: 'Старт:',
    REGISTRATION_END: 'Запись до:',
    MENTOR_ACTIVITIES: 'Старт менторства:',
    MENTOR_ACTIVITIES_SEPARATOR: '-',
  },
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
  AWS_AI: 'https://rs.school/courses/aws-ai',
};

export const KEY_CODES = {
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  SPACE: 'Space',
  TAB: 'Tab',
} as const;

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const API_CONTENT_TYPE_DICTIONARY = {
  TRAINER: 'contributor',
  COURSE: 'course',
  COURSE_PAGE: 'homePage',
  LANDING_PAGE: 'landingPage',
  PAGE: 'page',
} as const;

export const ANCHORS = {
  ABOUT_COMMUNITY: 'who-we-are',
  ABOUT_SCHOOL: 'about-rs-school',
  MENTORS_WANTED: 'mentors-wanted',
  UPCOMING_COURSES: 'upcoming-courses',
  EVENTS: 'meet-us-at-events',
  MERCH: 'rs-merch',
  CONTRIBUTE: 'how-to-contribute',
  DONATE: 'support-us',
};

export const COURSE_STALE_AFTER_DAYS = 14;
export const COURSE_UPCOMING_PERIOD_MONTHS = 3;

export const LINKS = {
  BECOME_MENTOR: 'https://app.rs.school/registry/mentor',
  BECOME_CONTRIBUTOR:
    'https://docs.google.com/forms/d/e/1FAIpQLSdGKdEHK1CnZjgll9PpMU0xD1m0hm6xGoXc98H7woCDulyQkg/viewform',
  MERCH: 'https://sloths.rs.school/',
  DONATE_OPEN_COLLECTIVE: 'https://opencollective.com/rsschool',
  DONATE_BOOSTY: 'https://boosty.to/rsschool',
  ANGULAR_MENTORING: 'https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring',
};

export const NAV_MENU_LABELS = {
  RS_SCHOOL: 'RS School',
  COURSES: 'Courses',
  COMMUNITY: 'Community',
  MENTORSHIP: 'Mentorship',
  DOCS: 'Docs',
  SUPPORT_US: 'Support Us',
} as const;

export const NAV_MENU_LABELS_RU = {
  RS_SCHOOL: 'RS School',
  COURSES: 'Курсы',
  COMMUNITY: 'Сообщество',
  MENTORSHIP: 'Менторство',
  DOCS: 'Документация',
  SUPPORT_US: 'Поддержать',
} as const;

export const ROUTES = {
  HOME: '/',
  COMMUNITY: 'community',
  COURSES: 'courses',
  NODE_JS: 'nodejs',
  JS: 'javascript',
  JS_RU: 'javascript-ru',
  JS_PRESCHOOL_RU: 'javascript-preschool-ru',
  ANGULAR: 'angular',
  AWS_DEVELOPER: 'aws-cloud-developer',
  AWS_FUNDAMENTALS: 'aws-fundamentals',
  AWS_DEVOPS: 'aws-devops',
  AWS_AI: 'aws-ai',
  REACT: 'reactjs',
  MENTORSHIP: 'mentorship',
  DOCS: 'docs',
  MERCH: 'merch',
  NOT_FOUND: '*',
} as const;

export const SWR_CACHE_KEY = { MENTORS_PLAYLIST: 'MENTORS_PLAYLIST' };

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const OG_SITE_NAME = 'The Rolling Scopes School';
export const DYNAMIC = 'force-static';

export const COURSE_TITLES = {
  JS_PRESCHOOL_RU: 'JS / Front-end Pre-school RU',
  JS_EN: 'JS / Front-end EN',
  JS_RU: 'JS / Front-end RU',
  REACT: 'React',
  ANGULAR: 'Angular',
  NODE: 'Node.js',
  AWS_FUNDAMENTALS: 'AWS Fundamentals',
  AWS_CLOUD_DEVELOPER: 'AWS Cloud Developer',
  AWS_DEVOPS: 'AWS DevOps',
  AWS_AI: 'AWS AI',
} as const;

export const LOCALE_MAP = new Map<string, ApiResourceLocale>([
  ['ru', 'ru'],
  ['en', 'en-US'],
]);
