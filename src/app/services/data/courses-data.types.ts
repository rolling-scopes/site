export type Course = {
  id: string;
  title: string;
  iconSrc: string;
  secondaryIcon: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  backgroundStyle: { backgroundColor: string; accentColor: string };
};

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
