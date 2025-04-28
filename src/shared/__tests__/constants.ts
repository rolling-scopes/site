import { StaticImageData } from 'next/image';

import { Video } from '../types';
import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import { MentorFeedback } from '@/entities/mentor';
import type { Trainer } from '@/entities/trainer';
import nodejsImg1 from '@/shared/assets/mentors/m-shylau.webp';
import { COURSE_LINKS } from '@/shared/constants';
import { FaqDataItem, FaqDataItemWithLink } from '@/widgets/faq/types';
import { COURSE_TITLES } from 'data';

export const MOCKED_IMAGE_PATH: StaticImageData = {
  src: 'mocked-image-path.webp',
  height: 250,
  width: 250,
};
export const MOCKED_TRAINER = {
  name: 'Max Power',
  role: 'Executive Pastry Chef at The Cloud Cafe',
  bio: 'Max Power is a pastry master with a passion for crafting sweet treats. With over 7 years of experience whipping up delicious pastries and desserts, Max has honed their skills as the Head Pastry Chef on the prestigious Cloud Cafe. When not busy creating new recipes, Max enjoys leading baking classes and participating in friendly cooking competitions.',
  photo: nodejsImg1,
};

export const MOCKED_ONE_TRAINER: Trainer[] = [MOCKED_TRAINER];
export const MOCKED_SEVERAL_TRAINERS: Trainer[] = Array.from({ length: 8 }, () => MOCKED_TRAINER);

export const mockedCourses: Course[] = [
  {
    id: '1',
    title: COURSE_TITLES.JS_PRESCHOOL_RU,
    subTitle: 'Pre-school RU',
    descriptionUrl: COURSE_LINKS.JS_PRESCHOOL_RU,
    startDate: 'Jun 24, 2024',
    registrationEndDate: 'Jun 24, 2024',
    language: 'ru',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: 'JavaScript / Front-end',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '2',
    title: COURSE_TITLES.JS_EN,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.JS_EN,
    startDate: 'Oct, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: 'JavaScript / Front-end',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '3',
    title: COURSE_TITLES.JS_RU,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.JS_RU,
    startDate: 'Oct, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'ru',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: null,
    mode: 'online',
    altTitle: 'JavaScript / Front-end',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '4',
    title: COURSE_TITLES.REACT,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.REACT,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2024',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '5',
    title: COURSE_TITLES.ANGULAR,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.ANGULAR,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '6',
    title: COURSE_TITLES.AWS_FUNDAMENTALS,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.AWS_FUNDAMENTALS,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '8',
    title: COURSE_TITLES.AWS_CLOUD_DEVELOPER,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.AWS_CLOUD_DEVELOPER,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
    enroll: 'enroll',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
  {
    id: '9',
    title: COURSE_TITLES.AWS_DEVOPS,
    subTitle: undefined,
    descriptionUrl: COURSE_LINKS.AWS_DEVOPS,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
    enroll: null,
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
];

export const MOCKED_MERCH_DATA = {
  title: 'RS merch',
  subtitle: 'Are you an RS sloth fan and looking for RS merch?',
  paragraph: 'The wait is almost over',
  buttonText: 'Discover merch assets',
  buttonLink: 'https://sloths.rs.school/',
  imageAltText:
    'A collage of photos with branded T-shirts, cups, and stickers featuring the RSSchool logo',
};

export const MOCKED_MENTORS_FEEDBACK = {
  name: 'John Doe',
  course: 'React',
  review: 'One of the best courses!',
  photo: nodejsImg1,
};

export const MOCKED_ONE_MENTORS_FEEDBACK: MentorFeedback[] = [MOCKED_MENTORS_FEEDBACK];

export const MOCKED_SEVERAL_MENTORS_FEEDBACK: MentorFeedback[] = Array.from(
  { length: 8 },
  () => MOCKED_MENTORS_FEEDBACK,
);

export const MOCKED_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Video 1',
    thumbnail: 'thumb1.jpg',
  },
  {
    id: '2',
    title: 'Video 2',
    thumbnail: 'thumb2.jpg',
  },
  {
    id: '3',
    title: 'Video 3',
    thumbnail: 'thumb3.jpg',
  },
];

export const MOCKED_FAQ: FaqDataItem[] = [
  {
    question: 'What is The Rolling Scopes?',
    answer:
      'The Rolling Scopes is an independent international community of developers, mainly focusing on JavaScript, Front-end, iOS, and Android.',
  },
  {
    question: 'When was The Rolling Scopes organized?',
    answer: 'The Rolling Scopes was organized in 2013.',
  },
  {
    question: 'Are The Rolling Scopes events well known?',
    answer:
      'Yes, many developers worldwide know about and participate in their events and activities.',
  },
  {
    question: 'What is the RS School JavaScript/Front-end course?',
    answer:
      'It is a free Front-end/JavaScript course conducted by The Rolling Scopes Community since 2013.',
  },
];

export const MOCKED_FAQ_WITH_LINKS: FaqDataItemWithLink[] = [
  {
    question: 'Where can I ask a question?',
    answer: [
      {
        id: 0,
        text: 'You can ask questions in the Discord ',
        title: 'chat',
        link: 'https://discord.gg/2Ww3TCBvz4',
      },
    ],
  },
  {
    question: 'Where does communication take place?',
    answer: [
      {
        id: 1,
        text: 'In the Discord ',
        title: 'chat',
        link: 'https://discord.gg/2Ww3TCBvz4',
      },
    ],
  },
];
