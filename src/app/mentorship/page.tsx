import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship/mentorship';
import { mentorshipCoursesDefault } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;
  const description =
    'RS School Mentorship: share your knowledge, help others grow, develop leadership skills, and learn by teaching in our global tech community.';
  const keywords = 'RS School mentorship, mentor, teaching, leadership, tech mentorship, programming mentor, developer mentor';
  const canonical = 'https://rs.school/mentorship';
  const robots = 'index, follow';

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

export default async function MentorshipRoute() {
  return <Mentorship courses mentorshipData={mentorshipCoursesDefault} />;
}
