import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptRu } from '@/views/javascript-ru';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.JS_RU;

export async function generateMetadata(): Promise<Metadata> {
  return { title: getCourseTitle(courseName) };
}

export default function JsRuRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <JavaScriptRu lang="ru" course={course} courseName={courseName} />}</>;
}
