import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { AwsDevOps } from '@/views/aws-devops';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_DEVOPS;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AwsDeveloperRoute() {
  const course = await selectCourse(courseName);

  return <AwsDevOps course={course} courseName={courseName} />;
}
