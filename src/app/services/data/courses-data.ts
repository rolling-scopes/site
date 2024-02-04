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

// icons for pathCoursesList
import HTMLIcon from '@/assets/icons/html.png';
import JSIcon from '@/assets/icons/javascript.png';
import ReactAngIcon from '@/assets/icons/react-angular.svg';
import NodeJSIcon from '@/assets/icons/nodejs.png';
import AWSFundamentalsIcon from '@/assets/icons/aws-fundamentals.png';
import AWSDeveloperIcon from '@/assets/icons/aws-developer.png';
import { type CoursesPath, JSPath, AngularAwsPath } from './courses-data.types';

export const coursesData: Course[] = [
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

import stage1 from '@/assets/stages/stage-1.png';
import stage2 from '@/assets/stages/stage-2.png';
import stage3 from '@/assets/stages/stage-3.png';
import { Course } from '@/app/types';

export const jsPath: JSPath[] = [
  {
    id: 1,
    title: 'Stage 1',
    description:
      'Everyone registered is automatically eligible for this stage. The first stage lasts 15 weeks. This stage includes practical assignments and tests. Evaluation is either automatic or in the form of cross-checking between students.',
    imageSrc: stage1,
    topics: ['Git', 'HTML', 'CSS', 'Javascript basics']
  },
  {
    id: 2,
    title: 'Stage 2',
    description:
      'To pass to the second stage, you must successfully complete the tasks and tests from the first stage without missing the deadlines, and pass a mock technical interview with one of our mentors.The second stage lasts 20 weeks. You will be assigned a personal mentor who will answer your questions from now on. This stage includes practical exercises and tests which will be reviewed and evaluated by your mentor.',
    imageSrc: stage2,
    topics: [
      'Advanced Javascript',
      'Security',
      'Testing',
      'Agile',
      'Networking',
      'web development tools'
    ]
  },
  {
    id: 3,
    title: 'Stage 3',
    description:
      'Learning either React or Angular Framework (the choice belongs to the student). To enroll, you need to successfully complete two stages of training. Format: mentoring, self-study, webinars, and communication on Discord. Practical sessions are reviewed and evaluated by mentors, as well as through cross-checking methods. Throughout the training, mock interviews are conducted with different mentors.',
    imageSrc: stage3,
    actions: [
      'Choose a Framework: React or Angular.',
      'Collaborative development of a final project.',
      'Framework-based interviews.'
    ]
  }
];

export const angularPath: AngularAwsPath[] = [
  {
    id: 1,
    title: 'Week #1',
    actions: [
      'Module "Angular Intro. TypeScript."',
      'Module "Angular. Components"',
      'Module "Angular. Directives & Pipes"'
    ]
  },
  {
    id: 2,
    title: 'Week #2',
    actions: [
      'Module "Angular Intro. Task Review."',
      'Angular. Modules & Services, Dependency Injection',
      'Module "Angular. Directives & Pipes"',
      'Module "Angular. Routing"',
      'Workshop'
    ]
  },
  {
    id: 3,
    title: 'Week #3',
    actions: [
      '"Angular. Components, Directives, Pipes" task review',
      'Module "RxJS & Observables"',
      'Module "Angular. HTTP"',
      'Module "Angular. Forms"',
      'Workshop'
    ]
  },
  {
    id: 4,
    title: 'Week #4',
    actions: [
      '"Angular. Modules, Services, Routing" task review',
      'Module "Angular. Redux & NgRx"',
      'Module "Angular. Unit Test"',
      'Workshop'
    ]
  },
  {
    id: 5,
    title: 'Week #5-8',
    actions: [
      '"Angular. RxJS & HTTPClient & NgRx & Forms", task review',
      'Final Angular test',
      'Workshop',
      '"Project Management Application" final task'
    ]
  },
  {
    id: 5,
    title: 'Week #9',
    actions: ['Cross-checking the "Project management application" final task']
  }
];

export const awsPath: AngularAwsPath[] = [
  {
    id: 1,
    title: 'Module 1. Cloud Introduction',
    actions: [
      'Fundamental theory about cloud computing',
      'Cloud service models, cloud deployment models, infrastructure-as-code',
      'Monolith vs microservices vs serverless',
      'AWS intro, registration, Cloud Watch, IAM Repository structure'
    ]
  },
  {
    id: 2,
    title: 'Module 2. Serving SPA',
    actions: [
      'AWS Simple Storage Service overview',
      'Services & tools overview',
      'AWS CloudFront overview',
      'Basic overview of deployment process to CloudFront and S3',
      'AWS CLI overview'
    ]
  },
  {
    id: 3,
    title: 'Module 3. Serverless API',
    actions: [
      'AWS Lambda overview',
      'Introduction to collecting logs with AWS CloudWatch',
      'Lambda advanced features and configuration'
    ]
  },
  {
    id: 4,
    title: 'Module 4. Integration with NoSQL Database',
    actions: ['Easy way to store data in cloud', 'AWS DynamoDB and how to use it']
  },
  {
    id: 5,
    title: 'Module 5. Integration with S3',
    actions: [
      'AWS S3 in-depth introduction',
      'S3 storage classes and their use cases',
      'S3 access control & encryption',
      'S3 versioning, lifecycle management & events',
      'Integration with S3 and Lambda overview'
    ]
  },
  {
    id: 6,
    title: 'Module 6. Async Microservices Communication',
    actions: [
      'Async messaging overview',
      'AWS SQS overview',
      'AWS SNS overview',
      'Integration with SQS, SNS, and Lambda overview'
    ]
  },
  {
    id: 7,
    title: 'Module 7. Authorization',
    actions: [
      'Authentication & authorization overview',
      'Lambda authorizer & API Gateway',
      'AWS Cognito overview',
      'Cognito user pool',
      'Cognito identity pool'
    ]
  },
  {
    id: 8,
    title: 'Module 8. Integration with SQL Database',
    actions: [
      'Relational databases theory',
      'SQL overview',
      'Overview of AWS database offering',
      'AWS RDS and its engines',
      'Serverless functions & AWS RDS'
    ]
  },
  {
    id: 9,
    title: 'Module 9. Containerization',
    actions: [
      'Docker overview',
      'Dockerfiles & images',
      'Containers & VMs',
      'Docker build optimizations',
      'AWS Elastic Beanstalk overview',
      'AWS EB CLI'
    ]
  },
  {
    id: 10,
    title: 'Module 10. Backend for Frontend',
    actions: [
      'Backend for frontend overview',
      'BFF as pattern',
      'API Gateway as BFF',
      'AWS Elastic Beanstalk configuration'
    ]
  }
];
