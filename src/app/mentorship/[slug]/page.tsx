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
  const { slug } = await params;
  const locale = resolvePageLocale();

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
    imagePath: `/mentorship/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export async function generateStaticParams() {
  return await pageStore.loadPagesMetadata(PAGE_TYPE.MENTORSHIP_COURSE);
}

export default async function MentorshipRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = resolvePageLocale();
  const { sections } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP_COURSE, locale, slug);

  return <Mentorship sections={sections} />;
}
