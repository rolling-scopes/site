import react from '@/assets/icons/react.svg';
import nodejs from '@/assets/icons/node.svg';
import javascript from '@/assets/icons/javascript.png';
import angular from '@/assets/icons/angular.svg';
import aws from '@/assets/icons/aws.svg';
// secondary icons for Course
import reactSecondary from '@/assets/icons/react-secondary.png';
import jsSecondary from '@/assets/icons/js-secondary.png';
import awsSecondary from '@/assets/icons/aws-secondary.png';
import angularSecondary from '@/assets/icons/angular-secondary.png';
import nodejsSecondary from '@/assets/icons/nodejs-secondary.png';
//small icons for Course
import awsFundSmall from '@/assets/icons/footer/aws-fundamentals.png';
import awsDevSmall from '@/assets/icons/footer/aws-dev.png';
import jsSmall from '@/assets/icons/footer/javascript.png';
import htmlSmall from '@/assets/icons/footer/html.png';
import angularSmall from '@/assets/icons/footer/angular.png';
import nodejsSmall from '@/assets/icons/footer/nodejs.png';
import reactSmall from '@/assets/icons/footer/react.png';

import { type Course } from '@/app/types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'AWS Fundamentals',
    iconSrc: aws,
    iconSmall: awsFundSmall,
    secondaryIcon: awsSecondary,
    startDate: 'Sept 18, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: '/courses/aws-fundamentals',
    enroll: 'https://wearecommunity.io/events/rs-aws-2023q3',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  },
  {
    id: '2',
    title: 'React JS course',
    iconSrc: react,
    iconSmall: reactSmall,
    secondaryIcon: reactSecondary,
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: '/courses/reactjs',
    enroll: 'https://wearecommunity.io/events/rs-react-2023q4',
    backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
  },
  {
    id: '3',
    title: 'Angular course',
    iconSrc: angular,
    iconSmall: angularSmall,
    secondaryIcon: angularSecondary,
    startDate: '16 Oct, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: '/courses/angular',
    enroll: 'https://wearecommunity.io/events/rs-angular-2023q4',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' }
  },
  {
    id: '4',
    title: 'JS / Front-end course EN',
    altTitle: 'JavaScript / Front-end',
    type: 'Mentoring Program',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: '5 Nov, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: '/courses/javascript-mentoring-program',
    enroll: 'https://wearecommunity.io/events/rs-jsfe-en-2023q4',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '5',
    title: 'JS / Front-end course RU',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: '6 Nov, 2023',
    language: ['ru'],
    mode: 'online',
    detailsUrl: '/courses/javascript-mentoring-program',
    enroll: 'https://wearecommunity.io/events/js-fe-rs-2023q4',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '6',
    title: 'JS / Front-end course Pre-school',
    altTitle: 'JavaScript / Front-end',
    type: 'Pre-school',
    iconSrc: javascript,
    iconSmall: htmlSmall,
    secondaryIcon: jsSecondary,
    startDate: '24 Jun, 2024',
    language: ['ru'],
    mode: 'online',
    detailsUrl: '/courses/javascript-preschool',
    enroll: 'https://wearecommunity.io/events/js-stage0-rs-2024q2',
    backgroundStyle: { backgroundColor: '#FFDB201A', accentColor: '#FFDB204D' }
  },
  {
    id: '7',
    title: 'Node.js course',
    iconSrc: nodejs,
    iconSmall: nodejsSmall,
    secondaryIcon: nodejsSecondary,
    startDate: '22 Jan, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: '/courses/nodejs',
    enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
    backgroundStyle: { backgroundColor: '#F0F9F4', accentColor: '#AEDF36' }
  },
  {
    id: '8',
    title: 'AWS Cloud Developer',
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: '12 Feb, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: '/courses/aws-cloud-developer',
    enroll: 'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  }
];
