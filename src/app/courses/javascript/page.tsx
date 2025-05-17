import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptEn } from '@/views/javascript-en';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_EN;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'Everyone can study at RS School, regardless of age, professional employment, or place of residence.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/javascript.png',
  });

  return metadata;
}

export default async function JsEnRoute() {
  return <JavaScriptEn courseName={courseName} />;
}
