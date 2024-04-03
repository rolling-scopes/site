import { AwsFundamentals } from '@/pages/aws-fundamentals';
import { AwsDeveloper } from '@/pages/aws-developer';
import { BaseLayout } from '@/features/base-layout';
import { Home, Courses, Nodejs } from '@/pages';
import { JavaScript } from '@/pages/javascript';
import { NotFound } from '@/pages/not-found';
import { Angular } from '@/pages/angular';
import { React } from '@/pages/react';

export const routes = !process.env.RS_SCHOOL
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
                element: <JavaScript type="Mentoring Program" />
              },
              { path: 'javascript-preschool', element: <JavaScript type="Pre-school" /> },
              { path: 'angular', element: <Angular /> },
              { path: 'aws-cloud-developer', element: <AwsDeveloper /> },
              { path: 'aws-fundamentals', element: <AwsFundamentals /> },
              { path: 'reactjs', element: <React /> }
            ]
          }
        ]
      },
      { path: '*', element: <NotFound /> }
    ]
  : [
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Courses />
          },
          {
            path: '/courses',
            children: [
              { path: 'nodejs', element: <Nodejs /> },
              {
                path: 'javascript-mentoring-program',
                element: <JavaScript type="Mentoring Program" />
              },
              { path: 'javascript-preschool', element: <JavaScript type="Pre-school" /> },
              { path: 'angular', element: <Angular /> },
              { path: 'aws-cloud-developer', element: <AwsDeveloper /> },
              { path: 'aws-fundamentals', element: <AwsFundamentals /> },
              { path: 'reactjs', element: <React /> }
            ]
          }
        ]
      },
      { path: '*', element: <NotFound /> }
    ];
