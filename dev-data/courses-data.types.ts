import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import type { MentorActivity } from './mentorship-data.types';
import type { Course } from '@/entities/course';

export type DataMap = {
  mentorship: MentorActivity[];
  courses: Course[];
};

export type AboutCourseInfo = {
  id: number;
  title: string;
  info: string | ReactNode;
  icon: StaticImageData;
};
