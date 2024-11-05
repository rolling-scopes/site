import { Metadata } from 'next';
import { Mentorship } from '@/views/mentorship/mentorship.tsx';
import { mentorshipCourses } from 'data';

// export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;

  return { title };
}

type Params = {
  slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

// export default async function MentorshipCourseRoute({ params }: {
//   params: { slug: string };
// }) {
//   console.log(params);
//   return <Mentorship mentorshipData={mentorshipCourses[0]} />;
// }
export default async function MentorshipCourseRoute() {
  return <Mentorship mentorshipData={mentorshipCourses[0]} />;
}
