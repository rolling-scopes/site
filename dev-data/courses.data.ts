import { ROUTES } from '@/core/const';
import type { Course } from '@/entities/course';
import angular from '@/shared/assets/icons/angular-256.svg';
import angularSecondary from '@/shared/assets/icons/angular-black-256.svg';
import awsSecondary from '@/shared/assets/icons/aws-secondary.webp';
import aws from '@/shared/assets/icons/aws.svg';
import angularSmall from '@/shared/assets/icons/footer/angular-256.svg';
import awsDevSmall from '@/shared/assets/icons/footer/aws-dev.webp';
import awsFundSmall from '@/shared/assets/icons/footer/aws-fundamentals.webp';
import htmlSmall from '@/shared/assets/icons/footer/html5-256.svg';
import jsSmall from '@/shared/assets/icons/footer/javascript-256.svg';
import nodejsSmall from '@/shared/assets/icons/footer/node-js-256-small.svg';
import reactSmall from '@/shared/assets/icons/footer/react-256.svg';
import jsSecondary from '@/shared/assets/icons/javascript-256-black.svg';
import javascript from '@/shared/assets/icons/javascript-256.svg';
import nodejs from '@/shared/assets/icons/node-js-256.svg';
import nodejsSecondary from '@/shared/assets/icons/node-js-black-256.svg';
import react from '@/shared/assets/icons/react-256.svg';
import reactSecondary from '@/shared/assets/icons/react-black-256.svg';
import { COURSE_LINKS, TO_BE_DETERMINED } from '@/shared/constants';
import { COURSE_TITLES } from 'data';

export const courses: Course[] = [
  {
    id: '1',
    title: COURSE_TITLES.JS_PRESCHOOL_RU,
    subTitle: 'Pre-school RU',
    descriptionUrl: COURSE_LINKS.JS_PRESCHOOL_RU,
    altTitle: 'JavaScript / Front-end',
    iconSrc: javascript,
    iconSmall: htmlSmall,
    secondaryIcon: jsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'ru',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
    enroll: 'https://wearecommunity.io/events/js-stage0-rs-2024q2',
    backgroundStyle: {
      backgroundColor: '#FFFCE9',
      accentColor: '#FFDB20',
    },
  },
  {
    id: '2',
    title: COURSE_TITLES.JS_EN,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.JS_EN,
    altTitle: 'JavaScript / Front-end',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS}`,
    enroll: 'https://wearecommunity.io/events/js-en-2024q4',
    backgroundStyle: {
      backgroundColor: '#FFFCE9',
      accentColor: '#FFDB20',
    },
  },
  {
    id: '3',
    title: COURSE_TITLES.JS_RU,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.JS_RU,
    altTitle: 'JavaScript / Front-end',
    iconSrc: javascript,
    iconSmall: jsSmall,
    secondaryIcon: jsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'ru',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    enroll: 'https://wearecommunity.io/events/js-stage1-2024q4',
    backgroundStyle: {
      backgroundColor: '#FFFCE9',
      accentColor: '#FFDB20',
    },
  },
  {
    id: '4',
    title: COURSE_TITLES.REACT,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.REACT,
    iconSrc: react,
    iconSmall: reactSmall,
    secondaryIcon: reactSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
    enroll: 'https://wearecommunity.io/events/rs-react-2025q1',
    backgroundStyle: {
      backgroundColor: '#EAF8FE',
      accentColor: '#2BB4EF',
    },
  },
  {
    id: '5',
    title: COURSE_TITLES.ANGULAR,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.ANGULAR,
    iconSrc: angular,
    iconSmall: angularSmall,
    secondaryIcon: angularSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
    enroll: 'https://wearecommunity.io/events/rs-angular-2024q3',
    backgroundStyle: {
      backgroundColor: '#FFEFF2',
      accentColor: '#F95879',
    },
  },
  {
    id: '6',
    title: COURSE_TITLES.NODE,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.NODE,
    iconSrc: nodejs,
    iconSmall: nodejsSmall,
    secondaryIcon: nodejsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
    enroll: 'https://wearecommunity.io/events/nodejs-2025q2',
    backgroundStyle: {
      backgroundColor: '#F0F9F4',
      accentColor: '#AEDF36',
    },
  },
  {
    id: '7',
    title: COURSE_TITLES.AWS_FUNDAMENTALS,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.AWS_FUNDAMENTALS,
    iconSrc: aws,
    iconSmall: awsFundSmall,
    secondaryIcon: awsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
    enroll: 'https://wearecommunity.io/events/aws-fundamentals-course-2024q4',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
  },

  {
    id: '8',
    title: COURSE_TITLES.AWS_CLOUD_DEVELOPER,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.AWS_CLOUD_DEVELOPER,
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
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
    subTitle: null,
    descriptionUrl: COURSE_LINKS.AWS_DEVOPS,
    iconSrc: aws,
    iconSmall: awsDevSmall,
    secondaryIcon: awsSecondary,
    startDate: TO_BE_DETERMINED,
    registrationEndDate: TO_BE_DETERMINED,
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
    enroll: 'https://wearecommunity.io/events/aws-devops-course',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
  },
];
