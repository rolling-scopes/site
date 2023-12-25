import React from 'react';
import { Main } from './sections/Main';

import { Target } from './sections/Target';
import { About } from './sections/About';
import { Mentors } from './sections/Mentors';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'RS School', path: '/rs-courses' },
  { label: 'React JS course EN', path: '/react-JS-course-EN' }
];

export const ReactCourse = () => {
  return (
    <>
      <Main />
      <Breadcrumbs crumbs={crumbs} />
      <Target />
      <About />
      <Mentors />
    </>
  );
};
