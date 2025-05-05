import { selectCourse } from '../hooks/use-course-by-title/utils/select-course';
import { Course } from '@/entities/course';

export async function getCourseTitle(courseName: Course['title']) {
  const course = await selectCourse(courseName);

  return `${course.title} · The Rolling Scopes School`;
}
