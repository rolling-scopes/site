import HTMLIcon from '@/assets/icons/html.png';
import JSIcon from '@/assets/icons/javascript.png';
import ReactAngIcon from '@/assets/icons/react-angular.svg';
import NodeJSIcon from '@/assets/icons/nodejs.png';
import AWSFundamentalsIcon from '@/assets/icons/aws-fundamentals.png';
import AWSDeveloperIcon from '@/assets/icons/aws-developer.png';
import { type CoursesPath } from './courses-data.types';

export const coursesPath: CoursesPath[] = [
  {
    id: 1,
    title: 'Pre-school',
    description:
      'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
    logoIcon: HTMLIcon,
    links: [
      {
        linkTitle: 'Pre-school upturn',
        href: 'https://rs.school/js-stage0/',
        isActive: false
      }
    ]
  },
  {
    id: 2,
    title: 'JS/TS/FE Fundamentals',
    description:
      'Dive deep into the world of JavaScript, TypeScript, and Frontend development. Understand the core concepts and set yourself up for success.',
    logoIcon: JSIcon,
    links: [
      {
        linkTitle: 'JS/TS/FE Fundamentals (RU) invert',
        href: 'https://rs.school/js/'
      },
      {
        linkTitle: 'JS/TS/FE Fundamentals (EN) invert',
        href: 'https://rs.school/js-en/'
      }
    ]
  },
  {
    id: 3,
    title: 'React or Angular',
    description:
      "Choose your framework and become proficient. Whether you're Team React or Team Angular, we ensure you become an expert",
    logoIcon: ReactAngIcon,
    links: [
      {
        linkTitle: 'React invert',
        href: 'https://rs.school/react/'
      }
    ]
  },
  {
    id: 4,
    title: 'NodeJS',
    description:
      "Grasp the power of backend development. With Nodejs, you'll learn to build robust and scalable applications",
    logoIcon: NodeJSIcon,
    links: [
      {
        linkTitle: 'Node invert',
        href: 'https://rs.school/nodejs/'
      }
    ]
  },
  {
    id: 5,
    title: 'AWS Fundamentals',
    description:
      'Delve into the cloud with Amazon Web Services. Understand the essentials and ensure your apps are hosted seamlessly.',
    logoIcon: AWSFundamentalsIcon,
    links: [
      {
        linkTitle: 'AWS Fundamentals invert',
        href: 'https://rs.school/aws-fundamentals/'
      }
    ]
  },
  {
    id: 6,
    title: 'AWS Developer',
    description:
      'Go beyond the basics. Become an AWS pro and unlock the potential of cloud development.',
    logoIcon: AWSDeveloperIcon,
    links: [
      {
        linkTitle: 'AWS Developer invert',
        href: 'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4'
      }
    ]
  }
];
