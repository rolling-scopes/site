import type { Course } from '@/entities/course';
import { courseStore } from '@/entities/course';

export const selectCourse = async (courseName: Course['title']) => {
  const courses = await courseStore.loadCourses();

  return courses.find((course) => course.title === courseName) as Course;
};
