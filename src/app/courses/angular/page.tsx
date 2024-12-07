import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { Angular } from '@/views/angular';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.ANGULAR;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function AngularRoute() {
  const course = await selectCourse(courseName);

  return <Angular course={course} courseName={courseName} />;
}
