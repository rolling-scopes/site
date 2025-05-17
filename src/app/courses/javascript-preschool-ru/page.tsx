import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptPreSchoolRu } from '@/views/javascript-preschool-ru';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_PRESCHOOL_RU;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School JavaScript Preschool (RU): learn programming basics, problem-solving, and prepare for the main JavaScript/Front-end course. For beginners.';
  const keywords =
    'JavaScript preschool, основы программирования, обучение с нуля, RS School, подготовительный курс, программирование для начинающих';
  const canonical = 'https://rs.school/courses/javascript-preschool-ru';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/js-front-end-pre-school.png',
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function JsPreRoute() {
  return <JavaScriptPreSchoolRu courseName={courseName} />;
}
