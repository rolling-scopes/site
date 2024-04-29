import { route } from '@/app/const';
import { config } from '@/config';

const coursesRoute = {
  path: route.COURSES,
  children: [
    {
      index: true,
      lazy: () => import('../pages/courses.tsx'),
    },
    {
      path: route.NODE_JS,
      lazy: () => import('../pages/nodejs.tsx'),
    },
    {
      path: route.JS_MENTORING,
      async lazy() {
        const { Component } = await import('../pages/javascript.tsx');
        const boundedComponent = Component.bind(null, { type: 'Mentoring Program' });
        return { Component: boundedComponent };
      },
    },
    {
      path: route.JS_PRESCHOOL,
      async lazy() {
        const { Component } = await import('../pages/javascript.tsx');
        const boundedComponent = Component.bind(null, { type: 'Pre-school' });
        return { Component: boundedComponent };
      },
    },
    {
      path: route.ANGULAR,
      lazy: () => import('../pages/angular.tsx'),
    },
    {
      path: route.AWS_DEVELOPER,
      lazy: () => import('../pages/aws-developer.tsx'),
    },
    {
      path: route.AWS_FUNDAMENTALS,
      lazy: () => import('../pages/aws-fundamentals.tsx'),
    },
    {
      path: route.REACT,
      lazy: () => import('../pages/react.tsx'),
    },
  ],
};

const notFoundRoute = {
  path: route.NOT_FOUND,
  lazy: () => import('../pages/not-found.tsx'),
};

export const routes = config.isRollingScopesLanding
  ? [
      {
        path: route.HOME,
        lazy: () => import('../features/base-layout/base-layout.tsx'),
        children: [
          {
            index: true,
            lazy: () => import('../pages/home.tsx'),
          },
          coursesRoute,
        ],
      },
      notFoundRoute,
    ]
  : [
      {
        path: route.HOME,
        lazy: () => import('../features/base-layout/base-layout.tsx'),
        children: [
          {
            index: true,
            lazy: () => import('../pages/courses.tsx'),
          },
          {
            path: route.COMMUNITY,
            lazy: () => import('@/pages/home.tsx'),
          },
          coursesRoute,
        ],
      },
      notFoundRoute,
    ];
