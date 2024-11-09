import type { Course } from '@/entities/course';
import { getCourses } from '@/entities/course/api/course-api.ts';
import { CourseNamesKeys } from 'data';

export const selectCourse = async (courseName: CourseNamesKeys) => {
  const courses = await getCourses();

  return courses.find((course) => course.title === courseName) as Course;
};
