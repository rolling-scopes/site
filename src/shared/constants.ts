export const TABLET_W = import.meta.env.VITE_TABLET;
export const MOBILE_W = import.meta.env.VITE_MOBILE;
export const DESKTOP_W = 1280;
export const IS_DEV = import.meta.env.DEV;
export const RS_INTRO_URL = 'https://www.youtube.com/embed/n4unZLVpnaU';

export const PAGE_NAMES = {
  SCHOOL: 'school',
  COURSES: 'courses',
  COMMUNITY: 'community',
} as const;

export const COURSE_NAMES = {
  JS_FE_EN: 'js / front-end en',
  JS_FE_RU: 'js / front-end ru',
  JS_FE_PRE_RU: 'js / front-end pre-school ru',
  REACT: 'react',
  REACT_RU: 'react ru',
  ANGULAR: 'angular',
  NODE_JS: 'node.js',
  AWS_FUNDAMENTALS: 'aws fundamentals',
  AWS_CLOUD_DEV: 'aws cloud dev',
  AWS_DEVOPS: 'aws devops',
} as const;
