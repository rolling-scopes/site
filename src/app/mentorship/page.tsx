import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship/mentorship';
import { mentorshipCoursesDefault } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;
  const description =
    'RS School Mentorship: share your knowledge, help others grow, develop leadership skills, and learn by teaching in our global tech community.';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images-pages/mentorship.png',
  });

  return metadata;
}

export default async function MentorshipRoute() {
  return <Mentorship courses mentorshipData={mentorshipCoursesDefault} />;
}
