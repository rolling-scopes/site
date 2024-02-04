import react from '@/assets/icons/react.svg';
import nodejs from '@/assets/icons/node.svg';
import javascript from '@/assets/icons/javascript.png';
import angular from '@/assets/icons/angular.svg';
import aws from '@/assets/icons/aws.svg';
// secondary icons for Course
import reactSecondary from '@/assets/icons/react-secondary.png';
import jsSecondary from '@/assets/icons/js-secondary.png';
import awsSecondary from '@/assets/icons/aws-secondary.png';
import angularSecondary from '@/assets/icons/aws-secondary.png';
import nodejsSecondary from '@/assets/icons/nodejs-secondary.png';
import { type Course } from '@/app/types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'AWS Fundamentals',
    iconSrc: aws,
    secondaryIcon: awsSecondary,
    startDate: 'Sept 18, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/aws-fundamentals/',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  },
  {
    id: '2',
    title: 'React JS course',
    iconSrc: react,
    secondaryIcon: reactSecondary,
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
  },

  {
    id: '3',
    title: 'Angular course',
    iconSrc: angular,
    secondaryIcon: angularSecondary,
    startDate: '16 Oct, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/angular/',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' }
  },
  {
    id: '4',
    title: 'JS / Front-end course',
    altTitle: 'JavaScript / Front-end',
    type: 'Mentoring Program',
    iconSrc: javascript,
    secondaryIcon: jsSecondary,
    startDate: '5 Nov, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js/',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '5',
    title: 'JS / Front-end course',
    iconSrc: javascript,
    secondaryIcon: jsSecondary,
    startDate: '6 Nov, 2023',
    language: ['ru'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js-en/',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '6',
    title: 'JS / Front-end course',
    altTitle: 'JavaScript / Front-end',
    type: 'Pre-school',
    iconSrc: javascript,
    secondaryIcon: jsSecondary,
    startDate: '5 Nov, 2023',
    language: ['ru'],
    mode: 'online',
    detailsUrl: 'https://rs.school/js/',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '7',
    title: 'Node.js course',
    iconSrc: nodejs,
    secondaryIcon: nodejsSecondary,
    startDate: '22 Jan, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/nodejs/',
    backgroundStyle: { backgroundColor: '#F0F9F4', accentColor: '#AEDF36' }
  }
];
