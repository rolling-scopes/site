import { FC } from 'react';
import { Course } from '@/entities/course';
import { PAGE_NAMES } from '@/shared/constants';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { RSCourses } from '@/widgets/courses';
import { General } from '@/widgets/general';
import { HeroPage } from '@/widgets/hero-page';
import { StudyPath } from '@/widgets/study-path/ui/study-path';

interface CourseProps {
  courses: Course[];
}
export const Courses: FC<CourseProps> = ({ courses }) => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.COURSES} />
      <Breadcrumbs />
      <RSCourses courses={courses} />
      <StudyPath path="coursesPath" />
      <General />
    </>
  );
};
