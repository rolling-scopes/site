import isCourse from '@/app/hooks/use-course-by-title/utils/is-course.ts';
import { Course } from '@/app/types';

export const selectCourse = (coursesData: Course[], titleStartsWith: string) => {
  const courses = coursesData.filter(isCourse);

  const titleLower = titleStartsWith.toLowerCase();

  const course = courses.find((course) => {
    const titleMatches =
      course.title.toLowerCase().startsWith(titleLower)
      || course.altTitle?.toLowerCase().startsWith(titleLower);

    return titleMatches;
  });

  return course;
};
