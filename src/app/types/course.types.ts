export type CourseType = 'Mentoring Program' | 'Pre-school';

export type Course = {
  id: string;
  title: string;
  altTitle?: string;
  type?: CourseType;
  iconSrc: string;
  secondaryIcon: string;
  iconSmall: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  enroll: string;
  backgroundStyle: { backgroundColor: string; accentColor: string };
};
