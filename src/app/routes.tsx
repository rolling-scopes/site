import { RouteObject } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { mentorshipCoursesLoader } from '@/pages/mentorship/mentorship-courses-loader.ts';
import { courseLoader } from '@/widgets/course-main/courseLoader.ts';

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
      loader: courseLoader,
      async lazy() {
        const { Nodejs } = await import('@/pages/nodejs.tsx');

        return { Component: Nodejs };
      },
    },
    {
      path: ROUTES.JS,
      loader: courseLoader,
      async lazy() {
        const { JavaScriptEn } = await import('@/pages/javascript-en.tsx');

        return { Component: JavaScriptEn };
      },
    },
    {
      path: ROUTES.JS_RU,
      loader: courseLoader,
      async lazy() {
        const { JavaScriptRu } = await import('@/pages/javascript-ru.tsx');

        return { Component: JavaScriptRu };
      },
    },
    {
      path: ROUTES.JS_PRESCHOOL_RU,
      loader: courseLoader,
      async lazy() {
        const { JavaScriptPreSchoolRu } = await import('@/pages/javascript-preschool-ru.tsx');

        return { Component: JavaScriptPreSchoolRu };
      },
    },
    {
      path: ROUTES.ANGULAR,
      loader: courseLoader,
      lazy: async () => {
        const { Angular } = await import('@/pages/angular.tsx');

        return { Component: Angular };
      },
    },
    {
      path: ROUTES.AWS_DEVELOPER,
      loader: courseLoader,
      lazy: async () => {
        const { AwsDeveloper } = await import('@/pages/aws-developer.tsx');

        return { Component: AwsDeveloper };
      },
    },
    {
      path: ROUTES.AWS_FUNDAMENTALS,
      loader: courseLoader,
      lazy: async () => {
        const { AwsFundamentals } = await import('@/pages/aws-fundamentals.tsx');

        return { Component: AwsFundamentals };
      },
    },
    {
      path: ROUTES.REACT,
      loader: courseLoader,
      lazy: async () => {
        const { React } = await import('@/pages/react.tsx');

        return { Component: React };
      },
    },
    {
      path: ROUTES.AWS_DEVOPS,
      loader: courseLoader,
      lazy: async () => {
        const { AwsDevOps } = await import('@/pages/aws-devops');

        return { Component: AwsDevOps };
      },
    },
  ],
};

const mentorshipRoute: RouteObject = {
  path: ROUTES.MENTORSHIP,
  children: [
    {
      index: true,
      loader: () => mentorshipCoursesLoader(ROUTES.MENTORSHIP),
      lazy: async () => {
        const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');

        return { Component: Mentorship };
      },
    },
    {
      path: ROUTES.JS,
      loader: () => mentorshipCoursesLoader(ROUTES.JS),
      lazy: async () => {
        const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');

        return { Component: Mentorship };
      },
    },
    {
      path: ROUTES.JS_RU,
      loader: () => mentorshipCoursesLoader(ROUTES.JS_RU),
      lazy: async () => {
        const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');

        return { Component: Mentorship };
      },
    },
    {
      path: ROUTES.ANGULAR,
      loader: () => mentorshipCoursesLoader(ROUTES.ANGULAR),
      lazy: async () => {
        const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');

        return { Component: Mentorship };
      },
    },
    {
      path: ROUTES.REACT,
      loader: () => mentorshipCoursesLoader(ROUTES.REACT),
      lazy: async () => {
        const { Mentorship } = await import('@/pages/mentorship/mentorship.tsx');

        return { Component: Mentorship };
      },
    },
  ],
};

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
