import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsDevOps } from '@/views/aws-devops';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_DEVOPS;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'RS School AWS DevOps: learn AWS DevOps tools, CI/CD, automation, cloud infrastructure, and prepare for a DevOps career with hands-on projects.';

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
