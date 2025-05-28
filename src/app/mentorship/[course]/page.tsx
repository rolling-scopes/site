import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship/mentorship';
import { MentorshipCourseRouteKeys, mentorshipCourses, mentorshipCoursesDefault } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;
  const description =
    'RS School Mentorship: mentor React, Angular, or JavaScript students, share expertise, develop leadership, and grow with our global tech community.';
  const keywords = 'RS School mentorship, mentor React, mentor Angular, mentor JavaScript, teaching, tech mentorship, developer mentor';
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
export async function generateStaticParams(): Promise<{ course: MentorshipCourseRouteKeys }[]> {
  return [
    { course: 'reactjs' },
    { course: 'angular' },
    { course: 'javascript' },
    { course: 'javascript-ru' },
  ];
}
export default async function MentorshipRoute({
  params,
}: {
  params: Promise<{
    course: MentorshipCourseRouteKeys;
  }>;
}) {
  const { course } = await params;
  const mentorshipCourse =
    mentorshipCourses.find((item) => item.detailsUrl.includes(`/${course}`))
    || mentorshipCoursesDefault;

  return <Mentorship mentorshipData={mentorshipCourse} />;
}
