import { Metadata } from 'next';

import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { React } from '@/views/react';
import { ShortTrack } from '@/views/short-track';
import { COURSE_TITLES } from 'data';

const courseName = COURSE_TITLES.SHORT_TRACK;

export async function generateMetadata(): Promise<Metadata> {
  return { title: await getCourseTitle(courseName) };
}

export default async function ShortTrackRoute() {
  return <ShortTrack courseName={courseName} />;
}
