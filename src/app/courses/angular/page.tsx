import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { Angular } from '@/views/angular';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.ANGULAR;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function AngularRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <Angular course={course} courseName={courseName} />}</>;
}
