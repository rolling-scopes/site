import { ROUTES } from '@/app/const';
import type { Course } from '@/entities/course';
import angularSecondary from '@/shared/assets/icons/angular-secondary.webp';
import angular from '@/shared/assets/icons/angular.svg';
import awsSecondary from '@/shared/assets/icons/aws-secondary.webp';
import aws from '@/shared/assets/icons/aws.svg';
import angularSmall from '@/shared/assets/icons/footer/angular.webp';
import awsDevSmall from '@/shared/assets/icons/footer/aws-dev.webp';
import awsFundSmall from '@/shared/assets/icons/footer/aws-fundamentals.webp';
import htmlSmall from '@/shared/assets/icons/footer/html.webp';
import jsSmall from '@/shared/assets/icons/footer/javascript.webp';
import nodejsSmall from '@/shared/assets/icons/footer/nodejs.webp';
import reactSmall from '@/shared/assets/icons/footer/react.webp';
import javascript from '@/shared/assets/icons/javascript.webp';
import jsSecondary from '@/shared/assets/icons/js-secondary.webp';
import nodejs from '@/shared/assets/icons/node.svg';
import nodejsSecondary from '@/shared/assets/icons/nodejs-secondary.webp';
import reactSecondary from '@/shared/assets/icons/react-secondary.webp';
import react from '@/shared/assets/icons/react.svg';
import { COURSE_TITLES } from 'data';

export const courses: Course[] = [
  {
    id: '1',
    title: COURSE_TITLES.JS_PRESCHOOL_RU,
    altTitle: 'JavaScript / Front-end',
    iconSrc: javascript,
    iconSmall: htmlSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Jun 24, 2024',
    language: ['ru'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
    enroll: 'https://wearecommunity.io/events/js-stage0-rs-2024q2',
    backgroundStyle: {
      backgroundColor: '#FFDB201A',
      accentColor: '#EFC91F',
    },
  },
  {
    id: '2',
    title: COURSE_TITLES.JS_EN,
    altTitle: 'JavaScript / Front-end',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Oct 28, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS}`,
    enroll: 'https://wearecommunity.io/events/js-en-2024q4',
    backgroundStyle: {
      backgroundColor: '#FFDB201A',
      accentColor: '#EFC91F',
    },
  },
  {
    id: '3',
    title: COURSE_TITLES.JS_RU,
    altTitle: 'JavaScript / Front-end',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: 'Oct 27, 2024',
    language: ['ru'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    enroll: 'https://wearecommunity.io/events/js-stage1-2024q4',
    backgroundStyle: {
      backgroundColor: '#FFDB201A',
      accentColor: '#EFC91F',
    },
  },
  {
    id: '4',
    title: COURSE_TITLES.REACT,
    iconSrc: react,
    iconSmall: reactSmall,
    secondaryIcon: reactSecondary,
    startDate: 'Jul 1, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
    enroll: 'https://wearecommunity.io/events/rs-react-2024q3',
    backgroundStyle: {
      backgroundColor: '#EEF3FE',
      accentColor: '#7356BF',
    },
  },
  {
    id: '5',
    title: COURSE_TITLES.ANGULAR,
    iconSrc: angular,
    iconSmall: angularSmall,
    secondaryIcon: angularSecondary,
    startDate: 'Jul 1, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
    enroll: 'https://wearecommunity.io/events/rs-angular-2024q3',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#F4AFA7',
    },
  },
  {
    id: '6',
    title: COURSE_TITLES.NODE,
    iconSrc: nodejs,
    iconSmall: nodejsSmall,
    secondaryIcon: nodejsSecondary,
    startDate: 'Sep 30, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
    enroll: 'https://wearecommunity.io/events/nodejs-2024q3',
    backgroundStyle: {
      backgroundColor: '#F0F9F4',
      accentColor: '#AEDF36',
    },
  },
  {
    id: '7',
    title: COURSE_TITLES.AWS_FUNDAMENTALS,
    iconSrc: aws,
    iconSmall: awsFundSmall,
    secondaryIcon: awsSecondary,
    startDate: 'Apr 15, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
    enroll: 'https://wearecommunity.io/events/rs-aws-2024q2',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
  },

  {
    id: '8',
    title: COURSE_TITLES.AWS_CLOUD_DEVELOPER,
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: 'May 28, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
    enroll: 'https://wearecommunity.io/events/aws-cloud-dev-rs2024q2',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
  },
  {
    id: '9',
    title: COURSE_TITLES.AWS_DEVOPS,
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: 'Sep 23, 2024',
    language: ['en'],
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
    enroll: 'https://wearecommunity.io/events/aws-devops-course',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
  },
];
