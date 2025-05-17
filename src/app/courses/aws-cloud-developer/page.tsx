import { Metadata } from 'next';

import { OG_COURSES_FOLDER, OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { AwsDeveloper } from '@/views/aws-developer';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_CLOUD_DEVELOPER;

export async function generateMetadata(): Promise<Metadata> {
  const title = await getCourseTitle(courseName);
  const description = 'RS School AWS Cloud Developer: step-by-step training for AWS Certified Developer Associate. Learn AWS services, cloud apps, and hands-on development.';
  const keywords = 'AWS Cloud Developer, AWS developer course, cloud apps, AWS certification, RS School, cloud development';
  const canonical = 'https://rs.school/courses/aws-cloud-developer';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/${OG_COURSES_FOLDER}/aws-cloud-developer.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function AwsDeveloperRoute() {
  return <AwsDeveloper courseName={courseName} />;
}
