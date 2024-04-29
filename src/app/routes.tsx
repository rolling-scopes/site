import { config } from '@/config';

const coursesRoute = {
  path: '/courses',
  children: [
    {
      index: true,
      async lazy() {
        const { Courses } = await import('../pages/courses.tsx');
        return { Component: Courses };
      },
    },
    {
      path: 'nodejs',
      async lazy() {
        const { Nodejs } = await import('../pages/nodejs.tsx');
        return { Component: Nodejs };
      },
    },
    {
      path: 'javascript-mentoring-program',
      async lazy() {
        const { JavaScript } = await import('../pages/javascript.tsx');
        const boundedComponent = JavaScript.bind(null, { type: 'Mentoring Program' });
        return { Component: boundedComponent };
      },
    },
    {
      path: 'javascript-preschool',
      async lazy() {
        const { JavaScript } = await import('../pages/javascript.tsx');
        const boundedComponent = JavaScript.bind(null, { type: 'Pre-school' });
        return { Component: boundedComponent };
      },
    },
    {
      path: 'angular',
      lazy: async () => {
        const { Angular } = await import('../pages/angular.tsx');
        return { Component: Angular };
      },
    },
    {
      path: 'aws-cloud-developer',
      lazy: async () => {
        const { AwsDeveloper } = await import('../pages/aws-developer.tsx');
        return { Component: AwsDeveloper };
      },
    },
    {
      path: 'aws-fundamentals',
      lazy: async () => {
        const { AwsFundamentals } = await import('../pages/aws-fundamentals.tsx');
        return { Component: AwsFundamentals };
      },
    },
    {
      path: 'reactjs',
      lazy: async () => {
        const { React } = await import('../pages/react.tsx');
        return { Component: React };
      },
    },
  ],
};

const notFoundRoute = {
  path: '*',
  lazy: async () => {
    const { NotFound } = await import('../pages/not-found.tsx');
    return { Component: NotFound };
  },
};

export const routes = config.isRollingScopesLanding
  ? [
      {
        path: '/',
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
        path: '/',
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
            path: '/community',
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
