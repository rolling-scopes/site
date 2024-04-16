import react from '@/assets/icons/react.svg';
import nodejs from '@/assets/icons/node.svg';
import javascript from '@/assets/icons/javascript.webp';
import angular from '@/assets/icons/angular.svg';
import aws from '@/assets/icons/aws.svg';
// secondary icons for Course
import reactSecondary from '@/assets/icons/react-secondary.webp';
import jsSecondary from '@/assets/icons/js-secondary.webp';
import awsSecondary from '@/assets/icons/aws-secondary.webp';
import angularSecondary from '@/assets/icons/angular-secondary.webp';
import nodejsSecondary from '@/assets/icons/nodejs-secondary.webp';
//small icons for Course
import awsFundSmall from '@/assets/icons/footer/aws-fundamentals.webp';
import awsDevSmall from '@/assets/icons/footer/aws-dev.webp';
import jsSmall from '@/assets/icons/footer/javascript.webp';
import htmlSmall from '@/assets/icons/footer/html.webp';
import angularSmall from '@/assets/icons/footer/angular.webp';
import nodejsSmall from '@/assets/icons/footer/nodejs.webp';
import reactSmall from '@/assets/icons/footer/react.webp';

import { Course } from '@/app/types';
import { buildUrl } from '../platform';

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
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '2',
    title: 'JS / Front-end course EN',
    altTitle: 'JavaScript / Front-end',
    type: 'Mentoring Program',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Nov 5, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/javascript-mentoring-program'),
    enroll: 'https://wearecommunity.io/events/rs-jsfe-en-2023q4',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '3',
    title: 'JS / Front-end course RU',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Nov 6, 2023',
    language: ['ru'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/javascript-mentoring-program'),
    enroll: 'https://wearecommunity.io/events/js-fe-rs-2023q4',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '4',
    title: 'React JS course',
    iconSrc: react,
    iconSmall: reactSmall,
    secondaryIcon: reactSecondary,
    startDate: 'Oct 23, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/reactjs'),
    enroll: 'https://wearecommunity.io/events/rs-react-2023q4',
    backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
  },
  {
    id: '5',
    title: 'Angular course',
    iconSrc: angular,
    iconSmall: angularSmall,
    secondaryIcon: angularSecondary,
    startDate: 'Oct 16, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/angular'),
    enroll: 'https://wearecommunity.io/events/rs-angular-2023q4',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' }
  },
  {
    id: '6',
    title: 'Node.js course',
    iconSrc: nodejs,
    iconSmall: nodejsSmall,
    secondaryIcon: nodejsSecondary,
    startDate: 'Jan 22, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/nodejs'),
    enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
    backgroundStyle: { backgroundColor: '#F0F9F4', accentColor: '#AEDF36' }
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
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  },
  {
    id: '8',
    title: 'AWS Cloud Developer',
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: 'Feb 12, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: buildUrl('/courses/aws-cloud-developer'),
    enroll: 'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  }
];
