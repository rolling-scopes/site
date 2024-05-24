import { FC } from 'react';
import { Breadcrumbs } from '@/app/components';
import { useTitle } from '@/app/hooks';
import { Principles } from '@/features/principles';
import {
  About,
  Alumni,
  Courses,
  Main,
  Mentoring,
  Mentors,
  Requirements,
  StudyWithUs,
} from '@/features/school';

export const School: FC = () => {
  useTitle('The Rolling Scopes School');

  return (
    <>
      <Main />
      <Breadcrumbs />
      <About />
      <Principles />
      <StudyWithUs />
      <Courses />
      <Alumni />
      <Mentors />
      <Mentoring />
      <Requirements />
    </>
  );
};
