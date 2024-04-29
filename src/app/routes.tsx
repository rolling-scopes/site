import { config } from '@/config';

const coursesRoute = {
  path: '/courses',
  children: [
    {
      index: true,
      lazy: () => import('../pages/courses.tsx'),
    },
    {
      path: 'nodejs',
      lazy: () => import('../pages/nodejs.tsx'),
    },
    {
      path: 'javascript-mentoring-program',
      async lazy() {
        const { Component } = await import('../pages/javascript.tsx');
        const boundedComponent = Component.bind(null, { type: 'Mentoring Program' });
        return { Component: boundedComponent };
      },
    },
    {
      path: 'javascript-preschool',
      async lazy() {
        const { Component } = await import('../pages/javascript.tsx');
        const boundedComponent = Component.bind(null, { type: 'Pre-school' });
        return { Component: boundedComponent };
      },
    },
    {
      path: 'angular',
      lazy: () => import('../pages/angular.tsx'),
    },
    {
      path: 'aws-cloud-developer',
      lazy: () => import('../pages/aws-developer.tsx'),
    },
    {
      path: 'aws-fundamentals',
      lazy: () => import('../pages/aws-fundamentals.tsx'),
    },
    {
      path: 'reactjs',
      lazy: () => import('../pages/react.tsx'),
    },
  ],
};

const notFoundRoute = {
  path: '*',
  lazy: () => import('../pages/not-found.tsx'),
};

export const routes = config.isRollingScopesLanding
  ? [
      {
        path: '/',
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
        path: '/',
        lazy: () => import('../features/base-layout/base-layout.tsx'),
        children: [
          {
            index: true,
            lazy: () => import('../pages/courses.tsx'),
          },
          {
            path: '/community',
            lazy: () => import('@/pages/home.tsx'),
          },
          coursesRoute,
        ],
      },
      notFoundRoute,
    ];
