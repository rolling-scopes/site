import { type CoursesPath } from './courses-data.types';
import { ROUTES } from '@/app/const';
import { buildUrl } from '@/app/services/platform';
import AWSDeveloperIcon from '@/shared/assets/icons/aws-developer.webp';
import AWSFundamentalsIcon from '@/shared/assets/icons/aws-fundamentals.webp';
import HTMLIcon from '@/shared/assets/icons/html.webp';
import JSIcon from '@/shared/assets/icons/javascript.webp';
import NodeJSIcon from '@/shared/assets/icons/nodejs.webp';
import ReactAngIcon from '@/shared/assets/icons/react-angular.svg';

export const coursesPath: CoursesPath[] = [
  {
    id: 1,
    title: 'Pre-school (RU)',
    description:
      'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
    logoIcon: HTMLIcon,
    links: [
      {
        linkTitle: 'Pre-school (RU)',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`),
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    title: 'JS/TS/FE Fundamentals',
    description:
      'Dive deep into the world of JavaScript, TypeScript, and Frontend development. Understand the core concepts and set yourself up for success.',
    logoIcon: JSIcon,
    links: [
      {
        linkTitle: 'JS/TS/FE Fundamentals (RU)',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.JS_RU}`),
      },
      {
        linkTitle: 'JS/TS/FE Fundamentals (EN)',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.JS}`),
      },
    ],
  },
  {
    id: 3,
    title: 'React or Angular',
    description:
      "Choose your framework and become proficient. Whether you're Team React or Team Angular, we ensure you become an expert",
    logoIcon: ReactAngIcon,
    links: [
      {
        linkTitle: 'React',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.REACT}`),
      },
      {
        linkTitle: 'Angular',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.ANGULAR}`),
      },
    ],
  },
  {
    id: 4,
    title: 'NodeJS',
    description:
      "Grasp the power of backend development. With Nodejs, you'll learn to build robust and scalable applications",
    logoIcon: NodeJSIcon,
    links: [
      {
        linkTitle: 'Node',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.NODE_JS}`),
      },
    ],
  },
  {
    id: 5,
    title: 'AWS Fundamentals',
    description:
      'Delve into the cloud with Amazon Web Services. Understand the essentials and ensure your apps are hosted seamlessly.',
    logoIcon: AWSFundamentalsIcon,
    links: [
      {
        linkTitle: 'AWS Fundamentals',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`),
      },
    ],
  },
  {
    id: 6,
    title: 'AWS Developer',
    description:
      'Go beyond the basics. Become an AWS pro and unlock the potential of cloud development.',
    logoIcon: AWSDeveloperIcon,
    links: [
      {
        linkTitle: 'AWS Developer',
        href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`),
      },
    ],
  },
];
