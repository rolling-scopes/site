import { Metadata } from 'next';
import path from 'path';

import { resolveCoursePageLocale } from '@/entities/course/helpers/resolve-course-page-locale';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Course } from '@/views/course/course';
import { coursePageStore } from '@/views/course/model/store';

type Params = {
  slug: string;
};

type CourseRouteParams = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: CourseRouteParams): Promise<Metadata> {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);

  const { courseName, description, keywords, courseUrl } = await coursePageStore.loadCoursePage(
    slug,
    locale,
  );
  const title = `${courseName} · The Rolling Scopes School`;
  const robots = {
    index: true,
    follow: true,
  };

  return generatePageMetadata({
    title,
    description,
    imagePath: path.join('courses', slug, 'og.png'),
    keywords,
    alternates: { canonical: courseUrl },
    robots,
  });
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
