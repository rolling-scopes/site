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
  const keywords =
    'JavaScript course, JS обучение, изучить JavaScript, ES6, веб-разработка, RS School, фронтенд, обучение программированию';
  const canonical = 'https://rs.school/courses/javascript-ru';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/js-front-end-ru.png',
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function JsRuRoute() {
  return <JavaScriptRu courseName={courseName} />;
}
