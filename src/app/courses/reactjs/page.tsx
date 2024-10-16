import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { React } from '@/views/react';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.REACT;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function ReactRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <React course={course} courseName={courseName} />}</>;
}
