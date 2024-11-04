import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { React } from '@/views/react';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.REACT;

export async function generateMetadata(): Promise<Metadata> {
  return { title: getCourseTitle(courseName) };
}

export default function ReactRoute() {
  const course = selectCourse(courses, courseName);

  return <React course={course} courseName={courseName} />;
}
