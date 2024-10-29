import { RouteObject } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { loader } from '@/entities/course';
import { mentorshipCoursesLoader } from '@/pages/mentorship/mentorship-courses-loader.ts';
import { MentorshipCourseRouteKeys, MentorshipDefaultRouteKeys } from 'data';

const coursesRoute: RouteObject = {
  path: ROUTES.COURSES,
  children: [
    {
      index: true,
      async lazy() {
        const { Courses } = await import('@/pages/courses.tsx');

        return { Component: Courses };
      },
    },
    {
      path: ROUTES.NODE_JS,
      loader,
      async lazy() {
        const { Nodejs } = await import('@/pages/nodejs.tsx');

        return { Component: Nodejs };
      },
    },
    {
      path: ROUTES.JS,
      loader,
      async lazy() {
        const { JavaScriptEn } = await import('@/pages/javascript-en.tsx');

        return { Component: JavaScriptEn };
      },
    },
    {
      path: ROUTES.JS_RU,
      loader,
      async lazy() {
        const { JavaScriptRu } = await import('@/pages/javascript-ru.tsx');

        return { Component: JavaScriptRu };
      },
    },
    {
      path: ROUTES.JS_PRESCHOOL_RU,
      loader,
      async lazy() {
        const { JavaScriptPreSchoolRu } = await import('@/pages/javascript-preschool-ru.tsx');

        return { Component: JavaScriptPreSchoolRu };
      },
    },
    {
      path: ROUTES.ANGULAR,
      loader,
      lazy: async () => {
        const { Angular } = await import('@/pages/angular.tsx');

        return { Component: Angular };
      },
    },
    {
      path: ROUTES.AWS_DEVELOPER,
      loader,
      lazy: async () => {
        const { AwsDeveloper } = await import('@/pages/aws-developer.tsx');

        return { Component: AwsDeveloper };
      },
    },
    {
      path: ROUTES.AWS_FUNDAMENTALS,
      loader,
      lazy: async () => {
        const { AwsFundamentals } = await import('@/pages/aws-fundamentals.tsx');

        return { Component: AwsFundamentals };
      },
    },
    {
      path: ROUTES.REACT,
      loader,
      lazy: async () => {
        const { React } = await import('@/pages/react.tsx');

        return { Component: React };
      },
    },
    {
      path: ROUTES.AWS_DEVOPS,
      loader,
      lazy: async () => {
        const { AwsDevOps } = await import('@/pages/aws-devops');

        return { Component: AwsDevOps };
      },
    },
  ],
};

const createMentorshipRoute = (path: MentorshipDefaultRouteKeys | MentorshipCourseRouteKeys) => ({
  path: path === 'mentorship' ? '' : path,
  loader: () => mentorshipCoursesLoader(path),
  lazy: async () => {
    const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');

    return { Component: Mentorship };
  },
});

const mentorshipRoute: RouteObject = {
  path: ROUTES.MENTORSHIP,
  children: [
    {
      index: true,
      ...createMentorshipRoute(ROUTES.MENTORSHIP),
    },
    createMentorshipRoute(ROUTES.JS),
    createMentorshipRoute(ROUTES.JS_RU),
    createMentorshipRoute(ROUTES.ANGULAR),
    createMentorshipRoute(ROUTES.REACT),
  ],
};

// const mentorshipRoute: RouteObject = {
//   path: ROUTES.MENTORSHIP,
//   children: [
//     {
//       index: true,
//       loader: () => mentorshipCoursesLoader(ROUTES.MENTORSHIP),
//       lazy: async () => {
//         const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');
//
//         return { Component: Mentorship };
//       },
//     },
//     {
//       path: ROUTES.JS,
//       loader: () => mentorshipCoursesLoader(ROUTES.JS),
//       lazy: async () => {
//         const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');
//
//         return { Component: Mentorship };
//       },
//     },
//     {
//       path: ROUTES.JS_RU,
//       loader: () => mentorshipCoursesLoader(ROUTES.JS_RU),
//       lazy: async () => {
//         const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');
//
//         return { Component: Mentorship };
//       },
//     },
//     {
//       path: ROUTES.ANGULAR,
//       loader: () => mentorshipCoursesLoader(ROUTES.ANGULAR),
//       lazy: async () => {
//         const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');
//
//         return { Component: Mentorship };
//       },
//     },
//     {
//       path: ROUTES.REACT,
//       loader: () => mentorshipCoursesLoader(ROUTES.REACT),
//       lazy: async () => {
//         const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');
//
//         return { Component: Mentorship };
//       },
//     },
//   ],
// };

const notFoundRoute: RouteObject = {
  path: ROUTES.NOT_FOUND,
  lazy: async () => {
    const { NotFound } = await import('@/pages/not-found.tsx');

    return { Component: NotFound };
  },
};

export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    lazy: async () => {
      const { BaseLayout } = await import('@/app/layouts/base-layout');

      return { Component: BaseLayout };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import('@/pages/home.tsx');

          return { Component: Home };
        },
      },
      {
        path: ROUTES.COMMUNITY,
        lazy: async () => {
          const { Community } = await import('@/pages/community.tsx');

          return { Component: Community };
        },
      },
      coursesRoute,
      mentorshipRoute,
    ],
  },
  notFoundRoute,
];
