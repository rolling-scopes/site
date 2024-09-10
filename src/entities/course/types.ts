export type Course = {
  id: string;
  title: string;
  altTitle?: string;
  iconSrc: string;
  secondaryIcon: string;
  iconSmall: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  enroll: string;
  backgroundStyle: {
    backgroundColor: string;
    accentColor: string;
  };
};

export type CourseCardProps = Pick<
  Course,
  'title' | 'iconSrc' | 'startDate' | 'detailsUrl' | 'mode' | 'language' | 'backgroundStyle'
>;

export type CourseStatus = 'planned' | 'available' | 'upcoming';
