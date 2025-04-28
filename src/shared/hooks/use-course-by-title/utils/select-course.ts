import type { Course } from '@/entities/course';
import { courseStore } from '@/entities/course';
import { CourseNamesKeys } from 'data';

export const selectCourse = async (courseName: CourseNamesKeys) => {
  const courses = await courseStore.loadCourses();

  return courses.find((course) => course.title === courseName) as Course;
};
