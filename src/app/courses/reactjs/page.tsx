import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { React } from '@/views/react';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.REACT;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'Everyone can study at RS School, regardless of age, professional employment, or place of residence';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/reactjs.png',
  });

  return metadata;
}

export default async function ReactRoute() {
  return <React courseName={courseName} />;
}
