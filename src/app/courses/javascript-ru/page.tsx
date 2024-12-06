import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptRu } from '@/views/javascript-ru';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_RU;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function JsRuRoute() {
  const course = await selectCourse(courseName);

  return <JavaScriptRu course={course} courseName={courseName} />;
}
