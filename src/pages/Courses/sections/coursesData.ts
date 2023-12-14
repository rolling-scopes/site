import React from '../../../assets/icons/react.svg';
import Node from '../../../assets/icons/Node.svg';
import JavaScript from '../../../assets/icons/JavaScript.png';
import Angular from '../../../assets/icons/Angular.svg';
import AWS from '../../../assets/icons/AWS.svg';

type Courses = {
  id: string;
  title: string;
  iconSrc: string;
  startDate: string;
  language: ('en' | 'ru')[];
  mode: 'online' | 'offline';
  detailsUrl: string;
  backgroundStyle: { backgroundColor: string; accentColor: string };
};

export const coursesData: Courses[] = [
  {
    id: '1',
    title: 'AWS Fundamentals',
    iconSrc: AWS,
    startDate: 'Sept 18, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/aws-fundamentals/',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  },
  {
    id: '2',
    title: 'React JS course',
    iconSrc: React,
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
  },

  {
    id: '3',
    title: 'Angular course',
    iconSrc: Angular,
    startDate: '16 Oct, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/angular/',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' }
  },
  {
    id: '4',
    title: 'JS / Front-end course',
    iconSrc: JavaScript,
    startDate: '5 Nov, 2023',
    language: ['ru'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js/',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '5',
    title: 'JS / Front-end course',
    iconSrc: JavaScript,
    startDate: '6 Nov, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js-en/',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '6',
    title: 'Node.js course',
    iconSrc: Node,
    startDate: '22 Jan, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/nodejs/',
    backgroundStyle: { backgroundColor: '#F0F9F4', accentColor: '#AEDF36' }
  }
];
