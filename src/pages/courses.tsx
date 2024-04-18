import { FC } from 'react';
import { Breadcrumbs } from '@/app/components';
import { useTitle } from '@/app/hooks';
import {
  About,
  General,
  Main,
  Mentoring,
  Mentors,
  Courses as RSCourses,
  Requirements,
} from '@/features/courses';
import { Principles } from '@/features/principles';
import { StudyPath } from '@/features/study-path';

export const Courses: FC = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <Main />
      <Breadcrumbs />
      <About />
      <Principles />
      <RSCourses />
      <StudyPath path="coursesPath" />
      <General />
      <Mentors />
      <Mentoring />
      <Requirements />
    </>
  );
};
