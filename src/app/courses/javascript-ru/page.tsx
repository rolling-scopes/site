import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptRu } from '@/views/javascript-ru';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.JS_RU;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function JsRuRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <JavaScriptRu lang="ru" course={course} courseName={courseName} />}</>;
}
