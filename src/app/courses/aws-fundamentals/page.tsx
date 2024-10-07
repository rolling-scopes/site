import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { AwsFundamentals } from '@/views/aws-fundamentals';
import { COURSE_TITLES, CourseName, courses } from 'data';

const courseName: CourseName = COURSE_TITLES.AWS_FUNDAMENTALS;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function AwsFundRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <AwsFundamentals course={course} courseName={courseName} />}</>;
}
