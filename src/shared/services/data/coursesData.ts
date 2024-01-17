import React from '@/assets/icons/react.svg';
import Node from '@/assets/icons/Node.svg';
import JavaScript from '@/assets/icons/JavaScript.png';
import Angular from '@/assets/icons/Angular.svg';
import AWS from '@/assets/icons/AWS.svg';
//icons for pathCoursesList
import HTMLIcon from '@/assets/icons/HTML.png';
import JSIcon from '@/assets/icons/JavaScript.png';
import ReactAngIcon from '@/assets/icons/ReactAngular.svg';
import NodeJSIcon from '@/assets/icons/Nodejs.png';
import AWSFundamentalsIcon from '@/assets/icons/AWSFundamentals.png';
import AWSDeveloperIcon from '@/assets/icons/AWSDeveloper.png';
import { type Courses } from './model';

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

type PathCoursesList = {
  id: number;
  title: string;
  description: string;
  logoIcon: string;
  links: {
    linkTitle: string;
    href: string;
    isActive?: boolean;
  }[];
};

export const pathCoursesList: PathCoursesList[] = [
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
