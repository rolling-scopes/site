import { Metadata } from 'next';

import { courseStore } from '@/entities/course';
import { Course } from '@/entities/course/ui/course-page';

type Params = {
  courseName: string;
};

type CourseRouteParams = {
  params: Promise<Params>;
};

type GenerateMetadataParams = {
  params: Params;
};

export async function generateMetadata({
  params: { courseName },
}: GenerateMetadataParams): Promise<Metadata> {
  const title = `${courseName} · The Rolling Scopes School`;

  return { title };
}

export async function generateStaticParams() {
  // TODO: change to slug?
  const coursePages = await courseStore.loadCoursePages();

  const staticParams = coursePages.map(({ title }) => ({ courseName: title }));

  return staticParams;
}
export default async function CourseRoute({ params }: CourseRouteParams) {
  const { courseName } = await params;
  const sections = await courseStore.loadCoursePage(courseName);

  return <Course name={courseName} sections={sections} />;
}
