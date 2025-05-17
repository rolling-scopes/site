import { Metadata } from 'next';

import { OG_COURSES_FOLDER, OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsFundamentals } from '@/views/aws-fundamentals';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_FUNDAMENTALS;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'RS School AWS Fundamentals: prepare for AWS Certified Cloud Practitioner, learn AWS basics, cloud concepts, security, billing, and core AWS services.';
  const keywords = 'AWS course, AWS fundamentals, cloud practitioner, learn AWS, RS School, cloud basics, cloud certification';
  const canonical = 'https://rs.school/courses/aws-fundamentals';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/${OG_COURSES_FOLDER}/aws-fundamentals.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function AwsFundRoute() {
  return <AwsFundamentals courseName={courseName} />;
}
