import { Metadata } from 'next';

import { courseStore } from '@/entities/course';
import { Course } from '@/entities/course/ui/course-page';

type Params = {
  slug: string;
};

type CourseRouteParams = {
  params: Promise<Params>;
};

type GenerateMetadataParams = {
  params: Params;
};

export async function generateMetadata({
  params: { slug },
}: GenerateMetadataParams): Promise<Metadata> {
  // TODO: not efficient to fetch the whole course page only to load the course name
  const { courseName } = await courseStore.loadCoursePage(slug);

  const title = `${courseName} · The Rolling Scopes School`;

  return { title };
}

export async function generateStaticParams() {
  return await courseStore.loadCoursePages();
}
export default async function CourseRoute({ params }: CourseRouteParams) {
  const { slug } = await params;
  const { courseName, sections, courseId } = await courseStore.loadCoursePage(slug);

  return <Course id={courseId} name={courseName} sections={sections} />;
}
