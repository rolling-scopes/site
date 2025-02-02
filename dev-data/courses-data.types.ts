import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import type { MentorActivity } from './mentorship-data.types';
import type { Course } from '@/entities/course';
import type { ListData } from '@/shared/types';

export type DataMap = {
  mentorship: MentorActivity[];
  courses: Course[];
  coursesPath: CoursesPath[];
  javascript: JSPath[];
  javascriptRu: JSPath[];
  angular: AngularAwsPath[];
  awsDev: AngularAwsPath[];
};

export interface JSPath {
  id: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  topics?: string[];
  list?: ListData;
  marked?: boolean;
}

export type AboutCourseInfo = {
  id: number;
  title: string;
  info: string | ReactNode;
  icon: StaticImageData;
};

export type AngularAwsPath = Pick<JSPath, 'id' | 'title' | 'list'>;

export interface CoursesPath {
  id: number;
  title: string;
  description: string;
  logoIcon: StaticImageData;
  links: {
    linkTitle: string;
    href: string;
    isActive?: boolean;
  }[];
  list?: ListData;
}
