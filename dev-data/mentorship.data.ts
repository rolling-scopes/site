import { COURSE_TITLES } from './courseTitles.data';
import { ROUTES } from '@/core/const';
import angular from '@/shared/assets/icons/angular.svg';
import angularSmall from '@/shared/assets/icons/footer/angular.webp';
import jsSmall from '@/shared/assets/icons/footer/javascript.webp';
import reactSmall from '@/shared/assets/icons/footer/react.webp';
import javascript from '@/shared/assets/icons/javascript.webp';
import react from '@/shared/assets/icons/react.svg';
import { TelegramIcon } from '@/shared/icons';
import { MENTOR_ONBOARD_TELEGRAM_EN, MENTOR_ONBOARD_TELEGRAM_RU, MentorshipCourse } from 'data';

const images = {
  angular: {
    href: angular,
    alt: 'Logo of popular framework Angular',
  },
  react: {
    href: react,
    alt: 'Logo of popular framework React',
  },
  js: {
    href: javascript,
    alt: 'Logo of popular language JavaScript',
  },
};

const texts = {
  title: {
    interview: 'Conducting technical interview',
    codeReview: 'Code review',
    bestPracticesFrame: 'Best practices used in the framework',
    bestPracticesJS: 'Best practices',
    finalProject: 'Supervising a team assignment',
  },
  description: {
    interview: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
    interviewCore: 'The mentor conducts interviews with students of other mentors on major topics of the course. Participation in interviews allows students not only to see their knowledge gaps, but also to feel the atmosphere of such meetings',
    codeReview: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
    bestPracticesFrame: 'The mentor shows what code structures are best to use based on their experience. Helps to understand possible future problems in the student\'s solution and ways to solve them',
    bestPracticesJS: 'The mentor shows what code structures are best to use based on their experience. Suggests how to better organize the structure of the application',
    finalProject: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
  },
};

const linkDocs = {
  en: {
    interview: 'https://docs.rs.school/#/en/first-interview',
    mentorOverview: 'https://docs.rs.school/#/en/rs-school-mentor',
    codeReview: 'https://docs.rs.school/#/en/pull-request-review-process',
  },
  ru: {
    interview: 'https://docs.rs.school/#/mentoring-first-interview',
    mentorOverview: 'https://docs.rs.school/#/rs-school-mentor',
    codeReview: 'https://docs.rs.school/#/pull-request-review-process',
  },
  js: { courseDocs: 'https://docs.rs.school/#/en/js-fe-course' },
};

const onboardLinks = {
  telegramRu: {
    title: 'Telegram RU',
    href: MENTOR_ONBOARD_TELEGRAM_RU,
    icon: TelegramIcon(),
  },
  telegramEn: {
    title: 'Telegram EN',
    href: MENTOR_ONBOARD_TELEGRAM_EN,
    icon: TelegramIcon(),
  },
};

export const mentorshipCoursesDefault: MentorshipCourse = {
  id: 0,
  title: COURSE_TITLES.JS_EN,
  iconSmall: jsSmall,
  lang: 'en',
  detailsUrl: `/${ROUTES.MENTORSHIP}`,
  links: {
    icon: [images.angular, images.react, images.js],
    mentorDocs: linkDocs.en.mentorOverview,
    onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
  },
  details: [
    'The duration of mentoring is 8-19 weeks',
    'Format: online',
    'A desire to mentor from 2 to 6 students',
    'An ability to dedicate 3 to 5 hours per week',
  ],
  activities: [
    {
      id: 1,
      title: texts.title.interview,
      description: texts.description.interview,
    },
    {
      id: 2,
      title: texts.title.bestPracticesJS,
      description: texts.description.bestPracticesJS,
    },
    {
      id: 3,
      title: texts.title.codeReview,
      description: texts.description.codeReview,
      links: [
        {
          href: linkDocs.en.codeReview,
          linkTitle: 'Details about code review',
        },
      ],
    },
    {
      id: 4,
      title: texts.title.finalProject,
      description: texts.description.finalProject,
    },
  ],
};

export const mentorshipCourses: MentorshipCourse[] = [
  {
    id: 1,
    title: COURSE_TITLES.JS_EN,
    description: '',
    iconSmall: jsSmall,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.JS}`,
    links: {
      icon: [images.js],
      courseDocs: linkDocs.js.courseDocs,
      mentorDocs: linkDocs.en.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      'The duration of mentoring is 18-19 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    activities: [
      {
        id: 1,
        title: texts.title.interview,
        description: texts.description.interview,
        links: [
          {
            href: linkDocs.en.interview,
            linkTitle: 'Details about technical interview',
          },
        ],
      },
      {
        id: 2,
        title: texts.title.bestPracticesJS,
        description: texts.description.bestPracticesJS,
      },
      {
        id: 3,
        title: texts.title.codeReview,
        description: texts.description.codeReview,
        links: [
          {
            href: linkDocs.en.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: 'Conducting two CoreJS interviews',
        description: texts.description.interviewCore,
      },
      {
        id: 5,
        title: texts.title.finalProject,
        description: texts.description.finalProject,
      },
    ],
  },
  {
    id: 2,
    title: COURSE_TITLES.JS_RU,
    description: '',
    iconSmall: jsSmall,
    lang: 'ru',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`,
    links: {
      icon: [images.js],
      mentorDocs: linkDocs.ru.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      'Длительность менторства 18-19 недель',
      'Формат: онлайн',
      'Ментор курирует от 2 до 6 студентов',
      'Необходимо уделять от 3 до 5 часов в неделю',
    ],
    activities: [
      {
        id: 1,
        title: 'Проведение технического интервью',
        description: 'По результату которого ментор принимает решение о работе со студентом. Интервью проводятся с 2+ студентами - общий размер команды определяется ментором в зависимости от его загруженности',
        links: [
          {
            href: linkDocs.ru.interview,
            linkTitle: 'Подробнее о техническом интервью',
          },
        ],
      },
      {
        id: 2,
        title: 'Лучшие практики',
        description: 'Ментор показывает, какие конструкции кода лучше всего использовать, основываясь на своем опыте. Подсказывает как лучше организовать структуру приложения',
      },
      {
        id: 3,
        title: 'Ревью кода',
        description: 'Ментор просматривает код, указывает на неточности, предлагает, как их улучшить. Ревью кода помогает студенту развить необходимые навыки для работы в команде',
        links: [
          {
            href: linkDocs.ru.codeReview,
            linkTitle: 'Подробнее о ревью кода',
          },
        ],
      },
      {
        id: 4,
        title: 'Проведение двух CoreJS интервью',
        description: 'Ментор проводит два интервью со студентами других менторов по основным темам курса. Участие в интервью позволяет студентам не только увидеть свои пробелы в знаниях, но и почувствовать атмосферу подобных встреч',
      },
      {
        id: 5,
        title: 'Курирование командного задания',
        description: 'Опыт и практические знания ментора помогут организовать студентов для работы над командным проектом',
      },
    ],
  },
  {
    id: 3,
    title: COURSE_TITLES.REACT,
    description: '',
    iconSmall: reactSmall,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.REACT}`,
    links: {
      icon: [images.react],
      mentorDocs: linkDocs.en.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      'The duration of mentoring is 12 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    activities: [
      {
        id: 1,
        title: texts.title.bestPracticesFrame,
        description: texts.description.bestPracticesFrame,
      },
      {
        id: 2,
        title: texts.title.codeReview,
        description: texts.description.codeReview,
        links: [
          {
            href: linkDocs.en.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 3,
        title: texts.title.interview,
        description: texts.description.interviewCore,
      },
      {
        id: 4,
        title: texts.title.finalProject,
        description: texts.description.finalProject,
      },
    ],
  },
  {
    id: 4,
    title: COURSE_TITLES.ANGULAR,
    description: '',
    iconSmall: angularSmall,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`,
    links: {
      icon: [images.angular],
      mentorDocs: linkDocs.en.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      'The duration of mentoring is 8-10 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    activities: [
      {
        id: 1,
        title: texts.title.interview,
        description: texts.description.interview,
      },
      {
        id: 2,
        title: texts.title.bestPracticesFrame,
        description: texts.description.bestPracticesFrame,
      },
      {
        id: 3,
        title: texts.title.codeReview,
        description: texts.description.codeReview,
        links: [
          {
            href: linkDocs.en.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: texts.title.finalProject,
        description: texts.description.finalProject,
      },
    ],
  },
];
