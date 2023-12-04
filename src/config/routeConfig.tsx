import { Home, ReactCourse } from '../pages';

export enum AppRoutes {
  HOME = 'home',
  RS_COURSES = 'rs_courses',
  REACT_JS_COURSE = 'react-JS-course',
  CONTACT = 'contact',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.RS_COURSES]: '/courses',
  [AppRoutes.REACT_JS_COURSE]: '/react-JS-course',
  [AppRoutes.CONTACT]: '/contact',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig = [
  {
    path: RoutePath.home,
    element: <Home />
  },
  {
    path: RoutePath.rs_courses,
    element: <></>
  },
  {
    path: RoutePath['react-JS-course'],
    element: <ReactCourse />
  },
  {
    path: RoutePath.contact,
    element: <></>
  },
  {
    path: RoutePath.not_found,
    element: <></>
  }
];
