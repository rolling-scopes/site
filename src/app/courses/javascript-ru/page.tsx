import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptRu } from '@/views/javascript-ru';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_RU;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School JavaScript (RU): master modern JavaScript, ES6+, async programming, and web development in Russian. Build projects and boost your career!';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/javascript-ru.png',
  });

  return metadata;
}

export default async function JsRuRoute() {
  return <JavaScriptRu courseName={courseName} />;
}
