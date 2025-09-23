import { Metadata } from 'next';
import path from 'path';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { PageProps } from '@/entities/page/types';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Course } from '@/views/course';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const locale = resolvePageLocale(lang);

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
    imagePath: path.join(lang, 'courses', slug, 'og.png'),
    keywords,
    alternates: { canonical: courseUrl },
    robots,
  });
}

export async function generateStaticParams({ params: { lang } }: { params: Awaited<PageProps['params']> }) {
  const locale = resolvePageLocale(lang);

  return await pageStore.loadPagesMetadata(PAGE_TYPE.COURSE, locale);
}

export default async function CourseRoute({ params }: PageProps) {
  const { slug, lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections, courseId } = await pageStore.loadPage(PAGE_TYPE.COURSE, locale, slug);

  return <Course id={courseId} sections={sections} locale={locale} />;
}
