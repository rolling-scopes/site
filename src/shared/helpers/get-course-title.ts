import { selectCourse } from '../hooks/use-course-by-title/utils/select-course';
import { CourseNamesKeys, courses } from 'data';

export function getCourseTitle(courseName: CourseNamesKeys): string {
  const course = selectCourse(courses, courseName);

  return `${course?.title || ''} · The Rolling Scopes School`;
}
