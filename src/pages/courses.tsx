import { FC } from 'react';
import { PAGE_NAMES } from '@/app/const';
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { RSCourses } from '@/widgets/courses';
import { General } from '@/widgets/general';
import { HeroPage } from '@/widgets/hero-page';
import { StudyPath } from '@/widgets/study-path';

export const Courses: FC = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.COURSES} />
      <Breadcrumbs />
      <RSCourses />
      <StudyPath path="coursesPath" />
      <General />
    </>
  );
};
