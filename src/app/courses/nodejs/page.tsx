import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { Nodejs } from '@/views/nodejs';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.NODE;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function NodeRoute() {
  const course = await selectCourse(courseName);

  return <Nodejs course={course} courseName={courseName} />;
}
