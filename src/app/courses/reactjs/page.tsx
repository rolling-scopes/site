import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { React } from '@/views/react';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.REACT;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School React course: hands-on React.js, hooks, state management, and component architecture. Build scalable apps and master React best practices.';
  const keywords = 'React course, React training, learn React, React.js, web development, RS School, frontend, hooks, state management';
  const canonical = 'https://rs.school/courses/reactjs';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/reactjs.png',
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function ReactRoute() {
  return <React courseName={courseName} />;
}
