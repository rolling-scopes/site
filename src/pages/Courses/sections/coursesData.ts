import react from '../../../icons/react.svg';

type Courses = {
  id: string;
  title: string;
  iconSrc: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  backgroundStyle: { backgroundColor: string };
};

export const coursesData: Courses[] = [
  {
    id: '1',
    title: 'React JS course',
    iconSrc: react,
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: { backgroundColor: '#61DAFB' }
  },
  {
    id: '2',
    title: 'AWS Fundamentals',
    iconSrc: 'path/to/aws-icon.png',
    startDate: 'Sept 18, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/aws-fundamentals/',
    backgroundStyle: { backgroundColor: '#FF9900' }
  },
  {
    id: '3',
    title: 'Angular course',
    iconSrc: 'path/to/angular-icon.png',
    startDate: '16 Oct, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/angular/',
    backgroundStyle: { backgroundColor: '#DD0031' }
  },
  {
    id: '4',
    title: 'JS / Front-end course',
    iconSrc: 'path/to/angular-icon.png',
    startDate: '5 Nov, 2023',
    language: ['ru'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js/',
    backgroundStyle: { backgroundColor: '#DD0031' }
  },
  {
    id: '5',
    title: 'JS / Front-end course',
    iconSrc: 'path/to/angular-icon.png',
    startDate: '6 Nov, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js-en/',
    backgroundStyle: { backgroundColor: '#DD0031' }
  }
];
