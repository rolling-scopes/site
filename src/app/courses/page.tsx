import { Metadata } from 'next';

import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { coursesMetadata } from '@/metadata/courses';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const {
    title: coursesTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.COURSES);
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
