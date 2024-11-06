import { Metadata } from 'next';
import { Mentorship } from '@/views/mentorship.tsx';
import {
  MentorshipCourseRouteKeys,
  MentorshipDefaultRouteKeys,
  mentorshipCourses,
  mentorshipCoursesDefault,
} from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;

  return { title };
}

// TODO but return 404 page not working
export const dynamic = 'error';
export const dynamicParams = false;

export async function generateStaticParams():
Promise<{ mentorship: (MentorshipDefaultRouteKeys | MentorshipCourseRouteKeys)[] }[]> {
  return [
    { mentorship: ['mentorship'] },
    { mentorship: ['mentorship', 'reactjs'] },
    { mentorship: ['mentorship', 'angular'] },
    { mentorship: ['mentorship', 'javascript'] },
    { mentorship: ['mentorship', 'javascript-ru'] },
  ];
}

type PageParams = Promise<{
  mentorship: (MentorshipDefaultRouteKeys | MentorshipCourseRouteKeys)[];
}>;

export default async function MentorshipRoute(props: { params: PageParams }) {
  const { mentorship } = await props.params;

  const mentorshipCourse = mentorshipCourses.find((item) =>
    item.detailsUrl.includes(`/${mentorship[0]}/${mentorship[1]}`)) || mentorshipCoursesDefault;

  return <Mentorship mentorshipData={mentorshipCourse} />;
}
