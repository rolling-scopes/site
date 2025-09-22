import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { coursesMetadata } from '@/metadata/courses';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata({ params }: PageProps<'/[lang]/courses'>): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const {
    title: coursesTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.COURSES, locale);
  const title = `${coursesTitle} · ${OG_SITE_NAME}`;
  const { canonical, robots } = coursesMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/courses/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function CoursesRoute({ params }: PageProps<'/[lang]/courses'>) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.COURSES, locale);

  return <Courses sections={sections} />;
}
