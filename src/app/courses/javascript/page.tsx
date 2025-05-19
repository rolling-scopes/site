import { Metadata } from 'next';

import { OG_COURSES_FOLDER, OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { JavaScriptEn } from '@/views/javascript-en';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.JS_EN;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School JavaScript course: learn modern JavaScript, ES6+, async programming, and web development. Build real projects and boost your career!';
  const keywords =
    'JavaScript course, JS training, learn JavaScript, ES6, web development, RS School, frontend, coding bootcamp';
  const canonical = 'https://rs.school/courses/javascript';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/${OG_COURSES_FOLDER}/js-front-end-en.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function JsEnRoute() {
  return <JavaScriptEn courseName={courseName} />;
}
