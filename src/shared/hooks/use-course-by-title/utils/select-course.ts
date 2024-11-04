import isCourse from './is-course';
import type { Course } from '@/entities/course';

export const selectCourse = (coursesData: Course[], titleStartsWith: string) => {
  const courses = coursesData.filter(isCourse);
  const titleLower = titleStartsWith.toLowerCase();

  const course = courses.find((course) => {
    const titleMatches =
      course.title.toLowerCase().startsWith(titleLower)
      || course.altTitle?.toLowerCase().startsWith(titleLower);

    return titleMatches;
  });

  return course as Course;
};
