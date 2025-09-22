import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { mentorshipMetadata } from '@/metadata/mentorship';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship';

export async function generateMetadata({ params }: PageProps<'/[lang]/mentorship'>): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const {
    title,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP, locale);
  const preparedTitle = `${title} · ${OG_SITE_NAME}`;
  const { canonical, robots } = mentorshipMetadata;

  const metadata = generatePageMetadata({
    title: preparedTitle,
    description,
    imagePath: `/${lang}/mentorship/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function MentorshipRoute({ params }: PageProps<'/[lang]/mentorship'>) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP, locale);

  return <Mentorship sections={sections} />;
}
