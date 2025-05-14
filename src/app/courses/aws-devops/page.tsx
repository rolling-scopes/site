import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsDevOps } from '@/views/aws-devops';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_DEVOPS;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'If you are looking for an entry point to kickstart your IT career as a DevOps engineer, then this AWS course challenge is what you need.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/aws-devops.png',
  });

  return metadata;
}

export default async function AwsDeveloperRoute() {
  return <AwsDevOps courseName={courseName} />;
}
