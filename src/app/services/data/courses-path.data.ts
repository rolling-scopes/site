import { type CoursesPath } from './courses-data.types';
import { buildUrl } from '@/app/services/platform';
import AWSDeveloperIcon from '@/assets/icons/aws-developer.webp';
import AWSFundamentalsIcon from '@/assets/icons/aws-fundamentals.webp';
import HTMLIcon from '@/assets/icons/html.webp';
import JSIcon from '@/assets/icons/javascript.webp';
import NodeJSIcon from '@/assets/icons/nodejs.webp';
import ReactAngIcon from '@/assets/icons/react-angular.svg';

export const coursesPath: CoursesPath[] = [
  {
    id: 1,
    title: 'Pre-school',
    description:
      'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
    logoIcon: HTMLIcon,
    links: [
      {
        linkTitle: 'Pre-school',
        href: buildUrl('/courses/javascript-preschool'),
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
        // TODO: change link to RU page when it'll be ready
        linkTitle: 'JS/TS/FE Fundamentals (RU)',
        href: buildUrl('/courses/javascript-mentoring-program'),
      },
      {
        linkTitle: 'JS/TS/FE Fundamentals (EN)',
        href: buildUrl('/courses/javascript-mentoring-program'),
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
        href: buildUrl('/courses/reactjs'),
      },
      {
        linkTitle: 'Angular',
        href: buildUrl('/courses/angular'),
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
        href: buildUrl('/courses/nodejs'),
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
        href: buildUrl('/courses/aws-fundamentals'),
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
        href: buildUrl('/courses/aws-cloud-developer'),
      },
    ],
  },
];
