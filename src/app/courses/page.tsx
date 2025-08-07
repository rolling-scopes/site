import { Metadata } from 'next';

import { landingPageStore } from '@/entities/landing-page';
import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const { title: coursesTitle } = await landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.COURSES);
  const title = `${coursesTitle} · The Rolling Scopes School`;

  return { title };
}

export default function CoursesRoute() {
  return <Courses />;
}
