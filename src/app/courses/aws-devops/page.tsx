import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsDevOps } from '@/views/aws-devops';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_DEVOPS;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AwsDeveloperRoute() {
  return <AwsDevOps courseName={courseName} />;
}
