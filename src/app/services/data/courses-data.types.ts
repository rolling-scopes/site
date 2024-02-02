export type Course = {
  id: string;
  title: string;
  altTitle?: string;
  type?: CourseType;
  iconSrc: string;
  secondaryIcon: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  backgroundStyle: { backgroundColor: string; accentColor: string };
};

export type CourseType = 'Mentoring Program' | 'Pre-school';

export type DataMap = {
  [key: string]: any;
};

export type PathCoursesList = {
  id: number;
  title: string;
  description: string;
  logoIcon: string;
  links: {
    linkTitle: string;
    href: string;
    isActive?: boolean;
  }[];
};
