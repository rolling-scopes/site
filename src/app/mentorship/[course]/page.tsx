import { Metadata } from 'next';

import { mentorshipCourseMetadata } from '@/metadata/mentorship';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Mentorship } from '@/views/mentorship/mentorship';
import { MentorshipCourseRouteKeys, mentorshipCourses, mentorshipCoursesDefault } from 'data';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, canonical, robots } = mentorshipCourseMetadata;

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
