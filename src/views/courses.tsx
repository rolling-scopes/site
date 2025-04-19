import { PAGE_NAMES } from '@/shared/constants';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { RSCourses } from '@/widgets/courses';
import { General } from '@/widgets/general';
import { HeroPage } from '@/widgets/hero-page';
import { StudyPath } from '@/widgets/study-path';

export const Courses = () => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.COURSES} />
      <Breadcrumbs />
      <RSCourses />
      <StudyPath page="courses" />
      <General />
    </>
  );
};
