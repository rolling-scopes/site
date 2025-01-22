import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptRu } from '@/views/javascript-ru';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_RU;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function JsRuRoute() {
  return <JavaScriptRu courseName={courseName} />;
}
