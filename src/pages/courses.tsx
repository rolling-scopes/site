import { FC } from 'react';
import { General, Main } from '@/entities/courses';
import { StudyPath } from '@/features/study-path';
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { RSCourses } from '@/widgets/courses';

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
