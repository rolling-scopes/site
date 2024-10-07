import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { AwsDevOps } from '@/views/aws-devops';
import { COURSE_TITLES, type CourseName, courses } from 'data';

const courseName: CourseName = COURSE_TITLES.AWS_DEVOPS;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function AwsDeveloperRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <AwsDevOps course={course} courseName={courseName} />}</>;
}
