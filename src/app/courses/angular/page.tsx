import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { Angular } from '@/views/angular';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.ANGULAR;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'This course is designed for individuals with a solid foundation in JavaScript, TypeScript, and front-end development.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/angular.png',
  });

  return metadata;
}

export default async function AngularRoute() {
  return <Angular courseName={courseName} />;
}
