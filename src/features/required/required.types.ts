type ItemWithLink = {
  id: number;
  text: string;
  title: string;
  link: string;
};

export type LinkList = ItemWithLink[];

export type Description = (string | LinkList)[];

export type CourseModule = {
  title: string;
  description: Description;
};

export type Course = {
  knowBefore: CourseModule;
  willLearn?: CourseModule | CourseModule[];
};

export type CourseName =
  | 'awsFundamentals'
  | 'awsDev'
  | 'nodejs'
  | 'angular'
  | 'js / front-end en'
  | 'js / front-end ru'
  | 'js / front-end pre-school';

export type CourseMap = {
  [courseName in CourseName]: Course;
};
