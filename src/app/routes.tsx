import { config } from '@/config';
import { BaseLayout } from '@/features/base-layout';
import { Courses, Home, Nodejs } from '@/pages';
import { Angular } from '@/pages/angular';
import { AwsDeveloper } from '@/pages/aws-developer';
import { AwsFundamentals } from '@/pages/aws-fundamentals';
import { JavaScript } from '@/pages/javascript';
import { NotFound } from '@/pages/not-found';
import { React } from '@/pages/react';

export const routes = config.isRollingScopesLanding
  ? [
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: '/courses',
            children: [
              { index: true, element: <Courses /> },
              { path: 'nodejs', element: <Nodejs /> },
              {
                path: 'javascript-mentoring-program',
                element: <JavaScript type="Mentoring Program" />,
              },
              { path: 'javascript-preschool', element: <JavaScript type="Pre-school" /> },
              { path: 'angular', element: <Angular /> },
              { path: 'aws-cloud-developer', element: <AwsDeveloper /> },
              { path: 'aws-fundamentals', element: <AwsFundamentals /> },
              { path: 'reactjs', element: <React /> },
            ],
          },
        ],
      },
      { path: '*', element: <NotFound /> },
    ]
  : [
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: '/community',
            element: <Home />,
          },
          {
            path: '/courses',
            children: [
              {
                index: true,
                element: <Courses />,
              },
              { path: 'nodejs', element: <Nodejs /> },
              {
                path: 'javascript-mentoring-program',
                element: <JavaScript type="Mentoring Program" />,
              },
              { path: 'javascript-preschool', element: <JavaScript type="Pre-school" /> },
              { path: 'angular', element: <Angular /> },
              { path: 'aws-cloud-developer', element: <AwsDeveloper /> },
              { path: 'aws-fundamentals', element: <AwsFundamentals /> },
              { path: 'reactjs', element: <React /> },
            ],
          },
        ],
      },
      { path: '*', element: <NotFound /> },
    ];
