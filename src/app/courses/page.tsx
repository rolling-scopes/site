import { Metadata } from 'next';

import { landingPageStore } from '@/entities/landing-page';
import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { coursesMetadata } from '@/metadata/courses';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const {
    title: coursesTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.COURSES);
  const title = `${coursesTitle} · ${OG_SITE_NAME}`;
  const { canonical, robots } = coursesMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/courses/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function CoursesRoute() {
  return <Courses />;
}
