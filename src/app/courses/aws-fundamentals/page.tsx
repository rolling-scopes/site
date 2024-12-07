import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { AwsFundamentals } from '@/views/aws-fundamentals';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.AWS_FUNDAMENTALS;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AwsFundRoute() {
  const course = await selectCourse(courseName);

  return <AwsFundamentals course={course} courseName={courseName} />;
}
