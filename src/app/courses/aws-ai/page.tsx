import { Metadata } from 'next';

import { OG_COURSES_FOLDER, OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsAI } from '@/views/aws-ai';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_AI;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description =
    'RS School AWS AI course: learn AWS AI/ML services, machine learning fundamentals, cloud-based AI solutions, and hands-on projects for real skills.';
  const keywords = 'AWS AI course, machine learning, AWS ML, cloud AI, RS School, artificial intelligence, cloud computing';
  const canonical = 'https://rs.school/courses/aws-ai';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/${OG_COURSES_FOLDER}/aws-ai.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function AwsDeveloperRoute() {
  return <AwsAI courseName={courseName} />;
}
