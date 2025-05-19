import { Metadata } from 'next';

import { OG_COURSES_FOLDER, OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { Angular } from '@/views/angular';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.ANGULAR;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'RS School Angular course: for those with JavaScript/TypeScript skills. Learn Angular, build scalable apps, master components, services, and best practices.';
  const keywords = 'Angular course, Angular training, learn Angular, frontend, web development, RS School, TypeScript, компоненты';
  const canonical = 'https://rs.school/courses/angular';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/${OG_COURSES_FOLDER}/angular.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function AngularRoute() {
  return <Angular courseName={courseName} />;
}
