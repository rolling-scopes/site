import { Metadata } from 'next';

import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { mentorshipMetadata } from '@/metadata/mentorship';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship/mentorship';

export async function generateMetadata(): Promise<Metadata> {
  const {
    title,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP);
  const preparedTitle = `${title} · ${OG_SITE_NAME}`;
  const { canonical, robots } = mentorshipMetadata;

  const metadata = generatePageMetadata({
    title: preparedTitle,
    description,
    imagePath: `/mentorship/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function MentorshipRoute() {
  const { sections } = await pageStore.loadPage(PAGE_TYPE.MENTORSHIP);

  return <Mentorship sections={sections} />;
}
