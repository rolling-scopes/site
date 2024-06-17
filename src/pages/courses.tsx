import { FC } from 'react';
import { useTitle } from '@/app/hooks';
import { General, Main, Courses as RSCourses } from '@/features/courses';
import { StudyPath } from '@/features/study-path';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

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
