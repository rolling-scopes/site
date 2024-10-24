import { Metadata } from 'next';
import { Courses } from '@/views/courses';
import { courses } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Courses · The Rolling Scopes School';

  return { title };
}

export default function CoursesRoute() {
  return <Courses courses={courses} />;
}
