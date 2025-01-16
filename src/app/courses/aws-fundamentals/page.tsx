import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsFundamentals } from '@/views/aws-fundamentals';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_FUNDAMENTALS;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AwsFundRoute() {
  return <AwsFundamentals courseName={courseName} />;
}
