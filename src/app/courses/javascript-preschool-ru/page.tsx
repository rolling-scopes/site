import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptPreSchoolRu } from '@/views/javascript-preschool-ru';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_PRESCHOOL_RU;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'The preparatory stage will help those who are little or not familiar with programming and would like to subsequently study the main course "JavaScript/Front-end".';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/javascript-preschool-ru.png',
  });

  return metadata;
}

export default async function JsPreRoute() {
  return <JavaScriptPreSchoolRu courseName={courseName} />;
}
