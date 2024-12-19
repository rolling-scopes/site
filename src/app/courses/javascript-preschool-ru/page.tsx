import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptPreSchoolRu } from '@/views/javascript-preschool-ru';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_PRESCHOOL_RU;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function JsPreRoute() {
  return <JavaScriptPreSchoolRu courseName={courseName} />;
}
