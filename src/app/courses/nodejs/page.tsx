import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { Nodejs } from '@/views/nodejs';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.NODE;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function NodeRoute() {
  return <Nodejs courseName={courseName} />;
}
