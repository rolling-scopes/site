import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptEn } from '@/views/javascript-en';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_EN;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function JsEnRoute() {
  return <JavaScriptEn courseName={courseName} />;
}
