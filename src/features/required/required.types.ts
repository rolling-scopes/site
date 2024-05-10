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

export type CourseName = 'javascript' | 'awsFundamentals' | 'awsDev' | 'nodejs' | 'angular';

export type CourseMap = {
  [courseName in CourseName]: Course;
};
