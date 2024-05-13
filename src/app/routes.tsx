import { RouteObject } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { config } from '@/config';
import { courseLoader } from '@/features/course-main/courseLoader.ts';

const coursesRoute: RouteObject = {
  path: ROUTES.COURSES,
  children: [
    {
      index: true,
      async lazy() {
        const { Courses } = await import('../pages/courses.tsx');
        return { Component: Courses };
      },
    },
    {
      path: ROUTES.NODE_JS,
      loader: courseLoader,
      async lazy() {
        const { Nodejs } = await import('../pages/nodejs.tsx');
        return { Component: Nodejs };
      },
    },
    {
      path: ROUTES.JS_MENTORING,
      loader: courseLoader,
      async lazy() {
        const { JavaScript } = await import('../pages/javascript.tsx');
        const boundedComponent = JavaScript.bind(null, { type: 'Mentoring Program' });
        return { Component: boundedComponent };
      },
    },
    {
      path: ROUTES.JS_PRESCHOOL,
      loader: courseLoader,
      async lazy() {
        const { JavaScript } = await import('../pages/javascript.tsx');
        const boundedComponent = JavaScript.bind(null, { type: 'Pre-school' });
        return { Component: boundedComponent };
      },
    },
    {
      path: ROUTES.ANGULAR,
      loader: courseLoader,
      lazy: async () => {
        const { Angular } = await import('../pages/angular.tsx');
        return { Component: Angular };
      },
    },
    {
      path: ROUTES.AWS_DEVELOPER,
      loader: courseLoader,
      lazy: async () => {
        const { AwsDeveloper } = await import('../pages/aws-developer.tsx');
        return { Component: AwsDeveloper };
      },
    },
    {
      path: ROUTES.AWS_FUNDAMENTALS,
      loader: courseLoader,
      lazy: async () => {
        const { AwsFundamentals } = await import('../pages/aws-fundamentals.tsx');
        return { Component: AwsFundamentals };
      },
    },
    {
      path: ROUTES.REACT,
      loader: courseLoader,
      lazy: async () => {
        const { React } = await import('../pages/react.tsx');
        return { Component: React };
      },
    },
  ],
};

const notFoundRoute: RouteObject = {
  path: ROUTES.NOT_FOUND,
  lazy: async () => {
    const { NotFound } = await import('../pages/not-found.tsx');
    return { Component: NotFound };
  },
};

export const routes: RouteObject[] = config.isRollingScopesLanding
  ? [
      {
        path: ROUTES.HOME,
        lazy: async () => {
          const { BaseLayout } = await import('../features/base-layout/base-layout.tsx');
          return { Component: BaseLayout };
        },
        children: [
          {
            index: true,
            lazy: async () => {
              const { Home } = await import('../pages/home.tsx');
              return { Component: Home };
            },
          },
          coursesRoute,
        ],
      },
      notFoundRoute,
    ]
  : [
      {
        path: ROUTES.HOME,
        lazy: async () => {
          const { BaseLayout } = await import('../features/base-layout/base-layout.tsx');
          return { Component: BaseLayout };
        },
        children: [
          {
            index: true,
            lazy: async () => {
              const { Courses } = await import('../pages/courses.tsx');
              return { Component: Courses };
            },
          },
          {
            path: ROUTES.COMMUNITY,
            lazy: async () => {
              const { Home } = await import('../pages/home.tsx');
              return { Component: Home };
            },
          },
          coursesRoute,
        ],
      },
      notFoundRoute,
    ];
