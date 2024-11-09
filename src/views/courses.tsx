import { Course } from '@/entities/course';
import { PAGE_NAMES } from '@/shared/constants';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { RSCourses } from '@/widgets/courses';
import { General } from '@/widgets/general';
import { HeroPage } from '@/widgets/hero-page';
import { MemberActivity } from '@/widgets/member-activity';

type CourseProps = {
  courses: Course[];
};
export const Courses = ({ courses }: CourseProps) => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.COURSES} />
      <Breadcrumbs />
      <RSCourses courses={courses} />
      <MemberActivity path="coursesPath" />
      <General />
    </>
  );
};
