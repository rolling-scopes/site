import { RouteObject } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { loader } from '@/widgets/hero-course';

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
    ],
  },
  notFoundRoute,
];
