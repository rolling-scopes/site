import { buildUrl } from '../platform';
import { type Course } from '@/app/types';
import angularSecondary from '@/assets/icons/angular-secondary.webp';
import angular from '@/assets/icons/angular.svg';
import awsSecondary from '@/assets/icons/aws-secondary.webp';
import aws from '@/assets/icons/aws.svg';
import angularSmall from '@/assets/icons/footer/angular.webp';
import awsDevSmall from '@/assets/icons/footer/aws-dev.webp';
import awsFundSmall from '@/assets/icons/footer/aws-fundamentals.webp';
import htmlSmall from '@/assets/icons/footer/html.webp';
import jsSmall from '@/assets/icons/footer/javascript.webp';
import nodejsSmall from '@/assets/icons/footer/nodejs.webp';
import reactSmall from '@/assets/icons/footer/react.webp';
import javascript from '@/assets/icons/javascript.webp';
import jsSecondary from '@/assets/icons/js-secondary.webp';
import nodejs from '@/assets/icons/node.svg';
import nodejsSecondary from '@/assets/icons/nodejs-secondary.webp';
import reactSecondary from '@/assets/icons/react-secondary.webp';
import react from '@/assets/icons/react.svg';

export const courses: Course[] = [
  {
    id: '1',
    title: 'JS / Front-end Pre-school',
    altTitle: 'JavaScript / Front-end',
    type: 'Pre-school',
    iconSrc: javascript,
    iconSmall: htmlSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Jun 24, 2024',
    language: ['ru'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/javascript-preschool'),
    enroll: 'https://wearecommunity.io/events/js-stage0-rs-2024q2',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' },
  },
  {
    id: '2',
    title: 'JS / Front-end EN',
    altTitle: 'JavaScript / Front-end',
    type: 'Mentoring Program',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Oct, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/javascript-mentoring-program'),
    enroll: 'https://wearecommunity.io/events/rs-jsfe-en-2023q4',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' },
  },
  {
    id: '3',
    title: 'JS / Front-end RU',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Oct, 2024',
    language: ['ru'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/javascript-mentoring-program'),
    enroll: 'https://wearecommunity.io/events/js-fe-rs-2023q4',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' },
  },
  {
    id: '4',
    title: 'React',
    iconSrc: react,
    iconSmall: reactSmall,
    secondaryIcon: reactSecondary,
    startDate: 'Jul 1, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/reactjs'),
    enroll: 'https://wearecommunity.io/events/rs-react-2024q3',
    backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' },
  },
  {
    id: '5',
    title: 'Angular',
    iconSrc: angular,
    iconSmall: angularSmall,
    secondaryIcon: angularSecondary,
    startDate: 'Jul 1, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/angular'),
    enroll: 'https://wearecommunity.io/events/rs-angular-2024q3',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' },
  },
  {
    id: '6',
    title: 'Node.js',
    iconSrc: nodejs,
    iconSmall: nodejsSmall,
    secondaryIcon: nodejsSecondary,
    startDate: 'Sep, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/nodejs'),
    enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
    backgroundStyle: { backgroundColor: '#F0F9F4', accentColor: '#AEDF36' },
  },
  {
    id: '7',
    title: 'AWS Fundamentals',
    iconSrc: aws,
    iconSmall: awsFundSmall,
    secondaryIcon: awsSecondary,
    startDate: 'Apr 15, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/aws-fundamentals'),
    enroll: 'https://wearecommunity.io/events/rs-aws-2024q2',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' },
  },

  {
    id: '8',
    title: 'AWS Cloud Developer',
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: 'May 28, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/aws-cloud-developer'),
    enroll: 'https://wearecommunity.io/events/aws-cloud-dev-rs2024q2',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' },
  },
];
