import { Metadata } from 'next';
import path from 'path';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { PageProps } from '@/entities/page/types';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Course } from '@/views/course';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = resolvePageLocale();

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

export default async function CourseRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = resolvePageLocale();
  const { sections, courseId } = await pageStore.loadPage(PAGE_TYPE.COURSE, locale, slug);

  return <Course id={courseId} sections={sections} locale={locale} />;
}
