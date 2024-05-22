import { FC } from 'react';
import { Breadcrumbs } from '@/app/components';
import { useTitle } from '@/app/hooks';
import { General, Main, Courses as RSCourses } from '@/features/courses';
import { StudyPath } from '@/features/study-path';

export const Courses: FC = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <Main />
      <Breadcrumbs />
      <RSCourses />
      <StudyPath path="coursesPath" />
      <General />
    </>
  );
};
