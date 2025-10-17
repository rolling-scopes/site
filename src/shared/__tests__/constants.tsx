import { StaticImageData } from 'next/image';

import { Video } from '../types';
import { Course } from '@/entities/course';
import { MerchProduct } from '@/entities/merch/types';
import type { Trainer } from '@/entities/trainer';
import { COURSE_LINKS, COURSE_TITLES, ROUTES } from '@/shared/constants';
import { Paragraph } from '@/shared/ui/paragraph';

export const MOCKED_IMAGE_PATH: StaticImageData = {
  src: 'mocked-image-path.webp',
  height: 250,
  width: 250,
};
export const MOCKED_TRAINER = {
  name: 'Max Power',
  role: 'Executive Pastry Chef at The Cloud Cafe',
  bio: 'Max Power is a pastry master with a passion for crafting sweet treats. With over 7 years of experience whipping up delicious pastries and desserts, Max has honed their skills as the Head Pastry Chef on the prestigious Cloud Cafe. When not busy creating new recipes, Max enjoys leading baking classes and participating in friendly cooking competitions.',
  photo: MOCKED_IMAGE_PATH,
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
    language: new Set(['ru']),
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
    language: new Set(['en']),
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
    language: new Set(['ru']),
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    iconFooter: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: undefined,
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
    language: new Set(['en']),
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
    language: new Set(['en']),
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
    language: new Set(['en']),
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
    language: new Set(['en']),
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
    language: new Set(['en']),
    mode: 'online',
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
    enroll: undefined,
    backgroundStyle: {
      backgroundColor: '#F4F1FA',
      accentColor: '#7356BF',
    },
    personalMentoringStartDate: null,
    personalMentoringEndDate: null,
  },
];

export const MOCKED_MENTORS_FEEDBACK = {
  name: 'John Doe',
  course: 'React',
  review: [<Paragraph key="0">{[['One of the best courses!']]}</Paragraph>],
  photo: MOCKED_IMAGE_PATH,
};

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

export const MOCKED_PRODUCTS: MerchProduct[] = [
  {
    id: 1,
    title: 'Cool T-Shirt',
    tags: ['clothing', 'unisex'],
    name: 'cool-t-shirt',
    preview: ['https://example.com/preview/cool-t-shirt.jpg'],
    download: ['https://example.com/download/cool-t-shirt.zip'],
  },
  {
    id: 2,
    title: 'Awesome Mug',
    tags: ['kitchen', 'gift'],
    name: 'awesome-mug',
    preview: ['https://example.com/preview/awesome-mug.jpg'],
    download: ['https://example.com/download/awesome-mug.zip'],
  },
  {
    id: 3,
    title: 'Another T-Shirt',
    tags: ['clothing', 'men'],
    name: 'another-t-shirt',
    preview: ['https://example.com/preview/another-t-shirt.jpg'],
    download: ['https://example.com/download/another-t-shirt.zip'],
  },
];

export const MOCKED_PRODUCTS_WITH_MISSING_TAGS: MerchProduct[] = [
  {
    id: 1,
    title: 'Product 1',
    tags: null,
    name: 'product-1',
    preview: ['https://example.com/preview/product-1.jpg'],
    download: ['https://example.com/download/product-1.zip'],
  },
  {
    id: 2,
    title: 'Product 2',
    tags: undefined,
    name: 'product-2',
    preview: ['https://example.com/preview/product-2.jpg'],
    download: ['https://example.com/download/product-2.zip'],
  },
  {
    id: 3,
    title: 'Product 3',
    tags: [],
    name: 'product-3',
    preview: ['https://example.com/preview/product-3.jpg'],
    download: ['https://example.com/download/product-3.zip'],
  },
] as unknown as MerchProduct[];

export const MOCKED_PRODUCTS_WITH_BLANK_TAGS: MerchProduct[] = [
  {
    id: 1,
    title: 'Product 1',
    tags: ['tag1', '', 'tag2'],
    name: 'product-1',
    preview: ['https://example.com/preview/product-1.jpg'],
    download: ['https://example.com/download/product-1.zip'],
  },
  {
    id: 2,
    title: 'Product 2',
    tags: [''],
    name: 'product-2',
    preview: ['https://example.com/preview/product-2.jpg'],
    download: ['https://example.com/download/product-2.zip'],
  },
];

export const MOCKED_TAGS = ['Hoodie', 'Sticker', 'Cup'];

export const MOCKED_ROUTER = { replace: vi.fn() };
