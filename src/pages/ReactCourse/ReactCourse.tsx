import React from 'react';
import { Main } from './sections/Main';
import { Breadcrumbs } from './sections/Breadcrumbs';
import { Target } from './sections/Target';
import { About } from './sections/About';
import { Mentors } from './sections/Mentors';

export const ReactCourse = () => {
  return (
    <>
      <Main />
      <Breadcrumbs />
      <Target />
      <About />
      <Mentors />
    </>
  );
};
