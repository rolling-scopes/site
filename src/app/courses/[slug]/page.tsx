import { Metadata } from 'next';

import { resolveCoursePageLocale } from '@/entities/course/helpers/resolve-course-page-locale';
import { Course } from '@/views/course/course';
import { coursePageStore } from '@/views/course/model/store';

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
  const locale = resolveCoursePageLocale(slug);
  // TODO: not efficient to fetch the whole course page only to load the course name
  const { courseName } = await coursePageStore.loadCoursePage(slug, locale);

  const title = `${courseName} · The Rolling Scopes School`;

  return { title };
}

export async function generateStaticParams() {
  return await coursePageStore.loadCoursePages();
}
export default async function CourseRoute({ params }: CourseRouteParams) {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);
  const { courseName, sections, courseId } = await coursePageStore.loadCoursePage(slug, locale);

  return <Course id={courseId} name={courseName} sections={sections} locale={locale} />;
}
