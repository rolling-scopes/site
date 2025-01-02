import { StaticImageData } from 'next/image';
import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import type { Trainer } from '@/entities/trainer';
import nodejsImg1 from '@/shared/assets/mentors/m-shylau.webp';
import { COURSE_LINKS } from '@/shared/constants';
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
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: 'JavaScript / Front-end',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '2',
    title: COURSE_TITLES.JS_EN,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.JS_EN,
    startDate: 'Oct, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: 'JavaScript / Front-end',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '3',
    title: COURSE_TITLES.JS_RU,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.JS_RU,
    startDate: 'Oct, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'ru',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: 'JavaScript / Front-end',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '4',
    title: COURSE_TITLES.REACT,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.REACT,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2024',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '5',
    title: COURSE_TITLES.ANGULAR,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.ANGULAR,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '6',
    title: COURSE_TITLES.AWS_FUNDAMENTALS,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.AWS_FUNDAMENTALS,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '8',
    title: COURSE_TITLES.AWS_CLOUD_DEVELOPER,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.AWS_CLOUD_DEVELOPER,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
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
  },
  {
    id: '9',
    title: COURSE_TITLES.AWS_DEVOPS,
    subTitle: null,
    descriptionUrl: COURSE_LINKS.AWS_DEVOPS,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    startDate: 'Jul 1, 2024',
    registrationEndDate: 'Jun 24, 2025',
    language: 'en',
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
    enroll: 'enroll',
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
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
