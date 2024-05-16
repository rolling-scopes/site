import { FC } from 'react';
import { Breadcrumbs } from '@/app/components';
import { useTitle } from '@/app/hooks';
import { About, Main, Mentoring, Mentors, Requirements } from '@/features/courses';
import { Courses } from '@/features/home';
import { Principles } from '@/features/principles';

export const School: FC = () => {
  useTitle('The Rolling Scopes School');

  return (
    <>
      <Main />
      <Breadcrumbs />
      <About />
      <Principles />
      <Courses />
      <Mentors />
      <Mentoring />
      <Requirements />
    </>
  );
};
