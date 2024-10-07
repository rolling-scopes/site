import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { Nodejs } from '@/views/nodejs';
import { COURSE_TITLES, CourseName, courses } from 'data';

const courseName: CourseName = COURSE_TITLES.NODE;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function NodeRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <Nodejs course={course} courseName={courseName} />}</>;
}
