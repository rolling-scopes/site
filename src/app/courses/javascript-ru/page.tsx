import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptRu } from '@/views/javascript-ru';
import { COURSE_TITLES, CourseName, courses } from 'data';

const courseName: CourseName = COURSE_TITLES.JS_RU;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function JsRuRoute() {
  const lang = 'ru';
  const course = selectCourse(courses, courseName);

  return <>{course && <JavaScriptRu lang={lang} course={course} courseName={courseName} />}</>;
}
