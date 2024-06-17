import { FC } from 'react';
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
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

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
