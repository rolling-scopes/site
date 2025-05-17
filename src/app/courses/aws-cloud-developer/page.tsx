import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsDeveloper } from '@/views/aws-developer';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_CLOUD_DEVELOPER;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'RS School AWS Cloud Developer: step-by-step training for AWS Certified Developer Associate. Learn AWS services, cloud apps, and hands-on development.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/aws-cloud-developer.png',
  });

  return metadata;
}

export default async function AwsDeveloperRoute() {
  return <AwsDeveloper courseName={courseName} />;
}
