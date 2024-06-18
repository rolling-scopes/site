import { FC } from 'react';

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
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';

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
