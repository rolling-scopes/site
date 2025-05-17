import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { Nodejs } from '@/views/nodejs';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.NODE;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School Node.js course: for JavaScript/Front-End devs to master Node.js, backend, APIs, databases, and server-side web app development.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/nodejs.png',
  });

  return metadata;
}

export default async function NodeRoute() {
  return <Nodejs courseName={courseName} />;
}
