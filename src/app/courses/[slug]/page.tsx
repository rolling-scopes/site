import { Metadata } from 'next';
import path from 'path';

import { resolveCoursePageLocale } from '@/entities/course';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Course } from '@/views/course';

type Params = {
  slug: string;
};

type CourseRouteParams = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: CourseRouteParams): Promise<Metadata> {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);

  const {
    courseUrl,
    title: courseName,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.COURSE, locale, slug);

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
  return await pageStore.loadPagesMetadata(PAGE_TYPE.COURSE);
}

export default async function CourseRoute({ params }: CourseRouteParams) {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);
  const { sections, courseId } = await pageStore.loadPage(PAGE_TYPE.COURSE, locale, slug);

  return <Course id={courseId} sections={sections} locale={locale} />;
}
