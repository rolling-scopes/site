import { Metadata } from 'next';

import { mentorshipMetadata } from '@/metadata/mentorship';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship/mentorship';
import { mentorshipCoursesDefault } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, canonical, robots } = mentorshipMetadata;

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
