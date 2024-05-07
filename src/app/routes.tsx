import { RouteObject } from 'react-router-dom';
import { route } from '@/app/const';
import { config } from '@/config';
import { courseLoader } from '@/features/course-main/courseLoader.ts';

const coursesRoute: RouteObject = {
  path: route.COURSES,
  children: [
    {
      index: true,
      async lazy() {
        const { Courses } = await import('../pages/courses.tsx');
        return { Component: Courses };
      },
    },
    {
      path: route.NODE_JS,
      loader: courseLoader,
      async lazy() {
        const { Nodejs } = await import('../pages/nodejs.tsx');
        return { Component: Nodejs };
      },
    },
    {
      path: route.JS_MENTORING,
      loader: courseLoader,
      async lazy() {
        const { JavaScript } = await import('../pages/javascript.tsx');
        const boundedComponent = JavaScript.bind(null, { type: 'Mentoring Program' });
        return { Component: boundedComponent };
      },
    },
    {
      path: route.JS_PRESCHOOL,
      loader: courseLoader,
      async lazy() {
        const { JavaScript } = await import('../pages/javascript.tsx');
        const boundedComponent = JavaScript.bind(null, { type: 'Pre-school' });
        return { Component: boundedComponent };
      },
    },
    {
      path: route.ANGULAR,
      loader: courseLoader,
      lazy: async () => {
        const { Angular } = await import('../pages/angular.tsx');
        return { Component: Angular };
      },
    },
    {
      path: route.AWS_DEVELOPER,
      loader: courseLoader,
      lazy: async () => {
        const { AwsDeveloper } = await import('../pages/aws-developer.tsx');
        return { Component: AwsDeveloper };
      },
    },
    {
      path: route.AWS_FUNDAMENTALS,
      loader: courseLoader,
      lazy: async () => {
        const { AwsFundamentals } = await import('../pages/aws-fundamentals.tsx');
        return { Component: AwsFundamentals };
      },
    },
    {
      path: route.REACT,
      loader: courseLoader,
      lazy: async () => {
        const { React } = await import('../pages/react.tsx');
        return { Component: React };
      },
    },
  ],
};

const notFoundRoute: RouteObject = {
  path: route.NOT_FOUND,
  lazy: async () => {
    const { NotFound } = await import('../pages/not-found.tsx');
    return { Component: NotFound };
  },
};

export const routes: RouteObject[] = config.isRollingScopesLanding
  ? [
      {
        path: route.HOME,
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
        path: route.HOME,
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
            path: route.COMMUNITY,
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
