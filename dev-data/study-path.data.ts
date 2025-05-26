import { StudyPathProps } from './study-path-data.types';
import AWSIcon from '@/shared/assets/icons/aws-black.svg';
import HTMLIcon from '@/shared/assets/icons/html5.svg';
import JSIcon from '@/shared/assets/icons/javascript.svg';
import NodeJSIcon from '@/shared/assets/icons/node-js.svg';
import ReactAngIcon from '@/shared/assets/icons/react-angular.svg';
import { ROUTES } from '@/shared/constants';

export const studyPath: StudyPathProps = {
  sectionTitle: 'Choose what you want to learn',
  sectionIntro:
    'A full-stack developer is someone who has expertise in both frontend (what users see) and backend (server and database) development. This dual skill set enables them to supervise and implement projects from start to finish. Businesses today prioritize hiring full-stack developers because they can efficiently bridge various technological aspects, resulting in faster product development.',
  stages: [
    {
      id: 1,
      title: 'Pre-school (RU)',
      intro:
        'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'Pre-school (RU)',
              link: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: HTMLIcon,
        alt: 'pre-school logo',
        className: 'stage-logo',
      },
    },
    {
      id: 2,
      title: 'JS/TS/FE Fundamentals',
      intro:
        'Dive deep into the world of JavaScript, TypeScript, and Frontend development. Understand the core concepts and set yourself up for success.',
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'JS/TS/FE Fundamentals (RU)',
              link: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
              external: false,
            },
            {
              id: 2,
              text: '',
              title: 'JS/TS/FE Fundamentals (EN)',
              link: `/${ROUTES.COURSES}/${ROUTES.JS}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: JSIcon,
        alt: 'JS logo',
        className: 'stage-logo',
      },
    },
    {
      id: 3,
      title: 'React or Angular',
      intro:
        "Choose your framework and become proficient. Whether you're Team React or Team Angular, we ensure you become an expert",
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'React',
              link: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
              external: false,
            },
            {
              id: 2,
              text: '',
              title: 'Angular',
              link: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: ReactAngIcon,
        alt: 'react and angular logo',
        className: 'stage-logo',
      },
    },
    {
      id: 4,
      title: 'NodeJS',
      intro:
        "Grasp the power of backend development. With Nodejs, you'll learn to build robust and scalable applications",
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'NodeJS',
              link: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: NodeJSIcon,
        alt: 'Node JS logo',
        className: 'stage-logo',
      },
    },
    {
      id: 5,
      title: 'AWS Fundamentals',
      intro:
        'Delve into the cloud with Amazon Web Services. Understand the essentials and ensure your apps are hosted seamlessly.',
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'AWS Fundamentals',
              link: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: AWSIcon,
        alt: 'aws logo',
        className: 'stage-logo',
      },
    },
    {
      id: 6,
      title: 'AWS Developer',
      intro:
        'Go beyond the basics. Become an AWS pro and unlock the potential of cloud development.',
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'AWS Developer',
              link: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: AWSIcon,
        alt: 'aws logo',
        className: 'stage-logo',
      },
    },
    {
      id: 7,
      title: 'AWS DevOps',
      intro:
        'If you are looking for an entry point to kickstart your IT career as a DevOps engineer, then this AWS course challenge is what you need.',
      modules: [
        {
          id: 1,
          text: '',
          links: [
            {
              id: 1,
              text: '',
              title: 'AWS DevOps',
              link: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
              external: false,
            },
          ],
          marked: false,
        },
      ],
      image: {
        src: AWSIcon,
        alt: 'aws logo',
        className: 'stage-logo',
      },
    },
  ],
};
