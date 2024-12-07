import { selectCourse } from '../hooks/use-course-by-title/utils/select-course';
import { CourseNamesKeys } from 'data';

export async function getCourseTitle(
  courseName: CourseNamesKeys,
): Promise<`${CourseNamesKeys} · The Rolling Scopes School`> {
  const course = await selectCourse(courseName);

  return `${course.title} · The Rolling Scopes School`;
}
