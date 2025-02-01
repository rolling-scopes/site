import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { React } from '@/views/react';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.REACT;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function ReactRoute() {
  return <React courseName={courseName} />;
}
