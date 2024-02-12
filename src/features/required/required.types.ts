export type CourseModule = {
  title: string;
  description: string[];
};

export type Course = {
  knowBefore: CourseModule;
  willLearn?: CourseModule | CourseModule[];
};

export type CourseName = 'javascript' | 'awsFundamentals' | 'awsDev' | 'nodejs' | 'angular';

export type CourseMap = {
  [courseName in CourseName]: Course;
};
