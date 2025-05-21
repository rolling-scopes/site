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

export async function generateMetadata({ params }: GenerateMetadataParams): Promise<Metadata> {
  const { slug } = await params;
  const isRuLocale = slug.endsWith('ru');
  const locale = isRuLocale ? 'ru' : 'en-US';
  // TODO: not efficient to fetch the whole course page only to load the course name
  const { courseName } = await courseStore.loadCoursePage(slug, locale);

  const title = `${courseName} · The Rolling Scopes School`;

  return { title };
}

export async function generateStaticParams() {
  return await courseStore.loadCoursePages();
}
export default async function CourseRoute({ params }: CourseRouteParams) {
  const { slug } = await params;
  const isRuLocale = slug.endsWith('ru');
  const locale = isRuLocale ? 'ru' : 'en-US';
  const { courseName, sections, courseId } = await courseStore.loadCoursePage(slug, locale);

  return <Course id={courseId} name={courseName} sections={sections} />;
}
