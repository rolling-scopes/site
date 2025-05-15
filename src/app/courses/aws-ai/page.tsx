import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsAI } from '@/views/aws-ai';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_AI;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AwsDeveloperRoute() {
  return <AwsAI courseName={courseName} />;
}
