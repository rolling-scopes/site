import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsDeveloper } from '@/views/aws-developer';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_CLOUD_DEVELOPER;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AwsDeveloperRoute() {
  return <AwsDeveloper courseName={courseName} />;
}
