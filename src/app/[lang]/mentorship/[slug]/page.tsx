import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { PageProps } from '@/entities/page/types';
import { mentorshipCourseMetadata } from '@/metadata/mentorship';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const locale = resolvePageLocale(lang);
  const {
    title: pageTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP_COURSE, locale, slug);

  const { canonical, robots } = mentorshipCourseMetadata;
  const title = `${pageTitle} · ${OG_SITE_NAME}`;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/mentorship/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export async function generateStaticParams({ params: { lang } }: { params: Awaited<PageProps['params']> }) {
  const locale = resolvePageLocale(lang);

  return await pageStore.loadPagesMetadata(PAGE_TYPE.MENTORSHIP_COURSE, locale);
}

export default async function MentorshipRoute({ params }: PageProps) {
  const { slug, lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP_COURSE, locale, slug);

  return <Mentorship sections={sections} />;
}
