import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { Angular } from '@/views/angular';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.ANGULAR;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AngularRoute() {
  return <Angular courseName={courseName} />;
}
