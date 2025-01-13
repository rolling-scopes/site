import { Metadata } from 'next';
import { Mentorship } from '@/views/mentorship/mentorship';
import { mentorshipCoursesDefault } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;

  return { title };
}

export default async function MentorshipRoute() {
  return <Mentorship mentorshipData={mentorshipCoursesDefault} />;
}
