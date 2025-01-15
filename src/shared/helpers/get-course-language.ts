import { selectCourse } from '../hooks/use-course-by-title/utils/select-course';
import { Language } from '../types';
import { CourseNamesKeys } from 'data';

export async function getCourseLanguage(courseName: CourseNamesKeys): Promise<Language> {
  const course = await selectCourse(courseName);

  return course.language;
}
