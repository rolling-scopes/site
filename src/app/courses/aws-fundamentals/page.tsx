import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsFundamentals } from '@/views/aws-fundamentals';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_FUNDAMENTALS;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'RS School AWS Fundamentals: prepare for AWS Certified Cloud Practitioner, learn AWS basics, cloud concepts, security, billing, and core AWS services.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images/aws-fundamentals.png',
  });

  return metadata;
}

export default async function AwsFundRoute() {
  return <AwsFundamentals courseName={courseName} />;
}
