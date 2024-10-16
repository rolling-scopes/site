import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptEn } from '@/views/javascript-en';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.JS_EN;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function JsEnRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <JavaScriptEn course={course} courseName={courseName} />}</>;
}
