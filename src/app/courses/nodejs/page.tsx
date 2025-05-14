import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { Nodejs } from '@/views/nodejs';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.NODE;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'This course is designed for JavaScript / Front-End developers who want to get acquainted with Node.js and the server side of web application development';

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
