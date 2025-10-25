import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { PageProps } from '@/entities/page/types';
import { coursesMetadata } from '@/metadata/courses';
import { OG_SITE_NAME, ROUTES } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const {
    title: coursesTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.COURSES, locale);
  const title = `${coursesTitle} · ${OG_SITE_NAME}`;
  const { robots } = coursesMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/courses/og.png`,
    keywords,
    alternates: { canonical: `https://rs.school/${lang}/${ROUTES.COURSES}` },
    robots,
  });

  return metadata;
}

export default async function CoursesRoute({ params }: PageProps) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.COURSES, locale);

  return <Courses sections={sections} />;
}
