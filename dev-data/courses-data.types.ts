import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import { MentorActivities } from './mentorship-data.types.ts';
import type { Course } from '@/entities/course';
import type { ListData } from '@/shared/types';

export type DataMap = {
  mentorship: MentorActivities[];
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
