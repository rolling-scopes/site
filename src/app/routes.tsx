import { Home, Courses, Nodejs } from '@/pages';
import { BaseLayout } from '@/features/base-layout';
import { JavaScript } from '@/pages/javascript';
import { Angular } from '@/pages/angular';
import { AwsDeveloper } from '@/pages/aws-developer';
import { React } from '@/pages/react';
import { AwsFundamentals } from '@/pages/aws-fundamentals';

export const routes = [
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
  }
];
