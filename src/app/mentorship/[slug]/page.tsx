import { Metadata } from 'next';

import { resolveCoursePageLocale } from '@/entities/course';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { mentorshipCourseMetadata } from '@/metadata/mentorship';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship';

type Params = {
  slug: string;
};

type PageRouteParams = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: PageRouteParams): Promise<Metadata> {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);

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

export default async function MentorshipRoute({ params }: PageRouteParams) {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP_COURSE, locale, slug);

  return <Mentorship sections={sections} />;
}
