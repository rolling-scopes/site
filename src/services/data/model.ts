export type Courses = {
  id: string;
  title: string;
  iconSrc: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  backgroundStyle: { backgroundColor: string; accentColor: string };
};

export type DataMap = {
  [key: string]: any;
};
