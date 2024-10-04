import { type RouteConfig } from '@react-router/dev/routes';
import { ROUTES } from '../app/const';

const coursesRoute: RouteConfig = [
  {
    path: ROUTES.COURSES,
    file: '../pages/courses.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
    file: '../pages/nodejs.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.JS}`,
    file: '../pages/javascript-en.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    file: '../pages/javascript-ru.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
    file: '../pages/javascript-preschool-ru.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
    file: '../pages/angular.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
    file: '../pages/aws-developer.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
    file: '../pages/aws-fundamentals.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.REACT}`,
    file: '../pages/react.tsx',
  },
  {
    path: `${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
    file: '../pages/aws-devops.tsx',
  },
];

const notFoundRoute: RouteConfig = [
  {
    path: ROUTES.NOT_FOUND,
    file: '../pages/not-found.tsx',
  },
];

export const routes: RouteConfig = [
  {
    index: true,
    file: '../pages/home.tsx',
  },
  {
    path: ROUTES.COMMUNITY,
    file: '../pages/community.tsx',
  },
  ...coursesRoute,
  ...notFoundRoute,
];
