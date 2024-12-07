import { LinkList } from '@/shared/types';

export type Description = (string | LinkList)[];

export type CourseModule = {
  title: string;
  description: Description;
};

export type Course = {
  title: string;
  knowBefore?: CourseModule;
  willLearn?: CourseModule[];
};
