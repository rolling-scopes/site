import isCourse from '@/app/hooks/use-course-by-title/utils/is-course.ts';
import { Course } from '@/app/types';

export const selectCourse = (
  coursesData: Course[],
  titleStartsWith: string,
  type: string | undefined,
) => {
  const courses = coursesData.filter(isCourse);

  const titleLower = titleStartsWith.toLowerCase();
  const typeLower = type?.toLowerCase();

  const course = courses.find((course) => {
    const titleMatches =
      course.title.toLowerCase().startsWith(titleLower) ||
      course.altTitle?.toLowerCase().startsWith(titleLower);

    const typeMatches = typeLower ? course.type?.toLowerCase() === typeLower : true;

    return titleMatches && typeMatches;
  });

  return course;
};
