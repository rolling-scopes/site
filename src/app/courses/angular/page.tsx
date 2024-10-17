import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { Angular } from '@/views/angular';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.ANGULAR;

export async function generateMetadata(): Promise<Metadata> {
  return { title: getCourseTitle(courseName) };
}

export default function AngularRoute() {
  const course = selectCourse(courses, courseName);

  return <>{course && <Angular course={course} courseName={courseName} />}</>;
}
