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

export type CourseName =
  | 'awsFundamentals'
  | 'awsDev'
  | 'nodejs'
  | 'angular'
  | 'js / front-end en'
  | 'js / front-end ru'
  | 'js / front-end pre-school ru'
  | 'awsDevops';

export type CourseMap = {
  [courseName in CourseName]: Course;
};
