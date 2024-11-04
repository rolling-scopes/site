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
  title: string;
  knowBefore?: CourseModule;
  willLearn?: CourseModule[];
};
