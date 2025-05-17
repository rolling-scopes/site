import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsAI } from '@/views/aws-ai';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_AI;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School AWS AI course: learn AWS AI/ML services, machine learning fundamentals, cloud-based AI solutions, and hands-on projects for real skills.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/aws-ai.png',
  });

  return metadata;
}

export default async function AwsDeveloperRoute() {
  return <AwsAI courseName={courseName} />;
}
