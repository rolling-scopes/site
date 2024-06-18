import { FC } from 'react';

import { General, Main, Courses as RSCourses } from '@/features/courses';
import { StudyPath } from '@/features/study-path';
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';

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
