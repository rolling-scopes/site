import { COURSE_TITLES } from './courseTitles.data';
import { ROUTES } from '@/core/const';
import angular from '@/shared/assets/icons/angular.svg';
import javascript from '@/shared/assets/icons/javascript.svg';
import react from '@/shared/assets/icons/react.svg';
import bestPractices from '@/shared/assets/svg/best-practices-icon.svg';
import codeReview from '@/shared/assets/svg/code-review-icon.svg';
import interview from '@/shared/assets/svg/interview.svg';
import assignment from '@/shared/assets/svg/assignment.svg';
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

const activitiesContent = {
  title: {
    interview: 'Conducting technical interview',
    interviewCore: 'Conducting two CoreJS interviews',
    codeReview: 'Code review',
    bestPracticesFrame: 'Best practices used in the framework',
    bestPracticesJS: 'Best practices',
    finalProject: 'Supervising a team assignment',
  },
  description: {
    interview:
      'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
    interviewCore:
      'The mentor conducts interviews with students of other mentors on major topics of the course. Participation in interviews allows students not only to see their knowledge gaps, but also to feel the atmosphere of such meetings',
    codeReview:
      'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
    bestPracticesFrame:
      "The mentor shows what code structures are best to use based on their experience. Helps to understand possible future problems in the student's solution and ways to solve them",
    bestPracticesJS:
      'The mentor shows what code structures are best to use based on their experience. Suggests how to better organize the structure of the application',
    finalProject:
      "The mentor's experience and practical knowledge will help organize students to work on a team project",
  },
  icon: {
    interview: interview,
    interviewCore: interview,
    codeReview: codeReview,
    bestPracticesFrame: bestPractices,
    bestPracticesJS: bestPractices,
    finalProject: assignment,
  },
};

const linkDocs = {
  en: {
    interview: 'https://rs.school/docs/en/first-interview',
    mentorOverview: 'https://rs.school/docs/en/rs-school-mentor',
    codeReview: 'https://rs.school/docs/en/pull-request-review-process',
  },
  ru: {
    interview: 'https://rs.school/docs/ru/mentoring-first-interview',
    mentorOverview: 'https://rs.school/docs/ru/rs-school-mentor',
    codeReview: 'https://rs.school/docs/ru/pull-request-review-process',
  },
  js: { courseDocs: 'https://rs.school/docs/en/js-fe-course' },
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
  iconSmall: javascript,
  lang: 'en',
  detailsUrl: `/${ROUTES.MENTORSHIP}`,
  links: {
    icon: [images.angular, images.react, images.js],
    mentorDocs: linkDocs.en.mentorOverview,
    onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
  },
  details: [
    {
      id: 1,
      title: 'duration of mentoring',
      info: '8-19 weeks',
    },
    {
      id: 2,
      title: 'amount of students desired to mentor',
      info: '2-6 students',
    },
    {
      id: 3,
      title: 'amount of hours possible to dedicate',
      info: '3-5 hrs/week',
    },
    {
      id: 4,
      title: 'format',
      info: 'online',
    },
  ],
  activitiesTitle: 'Mentor Activities',
  activities: [
    {
      id: 1,
      title: activitiesContent.title.interview,
      description: activitiesContent.description.interview,
      icon: activitiesContent.icon.interview,
    },
    {
      id: 2,
      title: activitiesContent.title.bestPracticesJS,
      description: activitiesContent.description.bestPracticesJS,
      icon: activitiesContent.icon.bestPracticesJS,
    },
    {
      id: 3,
      title: activitiesContent.title.codeReview,
      description: activitiesContent.description.codeReview,
      icon: activitiesContent.icon.codeReview,
      links: [
        {
          href: linkDocs.en.codeReview,
          linkTitle: 'Details about code review',
        },
      ],
    },
    {
      id: 4,
      title: activitiesContent.title.finalProject,
      description: activitiesContent.description.finalProject,
      icon: activitiesContent.icon.finalProject,
    },
  ],
};

export const mentorshipCourses: MentorshipCourse[] = [
  {
    id: 1,
    title: COURSE_TITLES.JS_EN,
    description: '',
    iconSmall: javascript,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.JS}`,
    links: {
      icon: [images.js],
      courseDocs: linkDocs.js.courseDocs,
      mentorDocs: linkDocs.en.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      {
        id: 1,
        title: 'duration of mentoring',
        info: '18-19 weeks',
      },
      {
        id: 2,
        title: 'amount of students desired to mentor',
        info: '2-6 students',
      },
      {
        id: 3,
        title: 'amount of hours possible to dedicate',
        info: '3-5 hrs/week',
      },
      {
        id: 4,
        title: 'format',
        info: 'online',
      },
    ],
    activitiesTitle: 'Mentor Activities',
    activities: [
      {
        id: 1,
        title: activitiesContent.title.interview,
        description: activitiesContent.description.interview,
        icon: activitiesContent.icon.interview,
        links: [
          {
            href: linkDocs.en.interview,
            linkTitle: 'Details about technical interview',
          },
        ],
      },
      {
        id: 2,
        title: activitiesContent.title.bestPracticesJS,
        description: activitiesContent.description.bestPracticesJS,
        icon: activitiesContent.icon.bestPracticesJS,
      },
      {
        id: 3,
        title: activitiesContent.title.codeReview,
        description: activitiesContent.description.codeReview,
        icon: activitiesContent.icon.codeReview,
        links: [
          {
            href: linkDocs.en.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: activitiesContent.title.interviewCore,
        description: activitiesContent.description.interviewCore,
        icon: activitiesContent.icon.interviewCore,
      },
      {
        id: 5,
        title: activitiesContent.title.finalProject,
        description: activitiesContent.description.finalProject,
        icon: activitiesContent.icon.finalProject,
      },
    ],
  },
  {
    id: 2,
    title: COURSE_TITLES.JS_RU,
    description: '',
    iconSmall: javascript,
    lang: 'ru',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`,
    links: {
      icon: [images.js],
      mentorDocs: linkDocs.ru.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      {
        id: 1,
        title: 'длительность наставничества',
        info: '8-19 недель',
      },
      {
        id: 2,
        title: 'на сопровождении',
        info: '2-6 студентов',
      },
      {
        id: 3,
        title: 'необходимо уделять времени',
        info: '3-5 ч/нед.',
      },
      {
        id: 4,
        title: 'формат',
        info: 'онлайн',
      },
    ],
    activitiesTitle: 'Деятельность Mентора',
    activities: [
      {
        id: 1,
        title: 'Проведение технического интервью',
        description: 'По результату которого ментор принимает решение о работе со студентом. Интервью проводятся с 2+ студентами - общий размер команды определяется ментором в зависимости от его загруженности',
        icon: activitiesContent.icon.interview,
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
        icon: activitiesContent.icon.bestPracticesJS,
      },
      {
        id: 3,
        title: 'Ревью кода',
        description: 'Ментор просматривает код, указывает на неточности, предлагает, как их улучшить. Ревью кода помогает студенту развить необходимые навыки для работы в команде',
        icon: activitiesContent.icon.codeReview,
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
        icon: activitiesContent.icon.interviewCore,
      },
      {
        id: 5,
        title: 'Курирование командного задания',
        description: 'Опыт и практические знания ментора помогут организовать студентов для работы над командным проектом',
        icon: activitiesContent.icon.finalProject,
      },
    ],
  },
  {
    id: 3,
    title: COURSE_TITLES.REACT,
    description: '',
    iconSmall: react,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.REACT}`,
    links: {
      icon: [images.react],
      mentorDocs: linkDocs.en.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      {
        id: 1,
        title: 'duration of mentoring',
        info: '12 weeks',
      },
      {
        id: 2,
        title: 'amount of students desired to mentor',
        info: '2-6 students',
      },
      {
        id: 3,
        title: 'amount of hours possible to dedicate',
        info: '3-5 hrs/week',
      },
      {
        id: 4,
        title: 'format',
        info: 'online',
      },
    ],
    activitiesTitle: 'Mentor Activities',
    activities: [
      {
        id: 1,
        title: activitiesContent.title.bestPracticesFrame,
        description: activitiesContent.description.bestPracticesFrame,
        icon: activitiesContent.icon.bestPracticesFrame,
      },
      {
        id: 2,
        title: activitiesContent.title.codeReview,
        description: activitiesContent.description.codeReview,
        icon: activitiesContent.icon.codeReview,
        links: [
          {
            href: linkDocs.en.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 3,
        title: activitiesContent.title.interview,
        description: activitiesContent.description.interviewCore,
        icon: activitiesContent.icon.interviewCore,
      },
      {
        id: 4,
        title: activitiesContent.title.finalProject,
        description: activitiesContent.description.finalProject,
        icon: activitiesContent.icon.finalProject,
      },
    ],
  },
  {
    id: 4,
    title: COURSE_TITLES.ANGULAR,
    description: '',
    iconSmall: angular,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`,
    links: {
      icon: [images.angular],
      mentorDocs: linkDocs.en.mentorOverview,
      onboard: [onboardLinks.telegramEn, onboardLinks.telegramRu],
    },
    details: [
      {
        id: 1,
        title: 'duration of mentoring',
        info: '8-10 weeks',
      },
      {
        id: 2,
        title: 'amount of students desired to mentor',
        info: '2-6 students',
      },
      {
        id: 3,
        title: 'amount of hours possible to dedicate',
        info: '3-5 hrs/week',
      },
      {
        id: 4,
        title: 'format',
        info: 'online',
      },
    ],
    activitiesTitle: 'Mentor Activities',
    activities: [
      {
        id: 1,
        title: activitiesContent.title.interview,
        description: activitiesContent.description.interview,
        icon: activitiesContent.icon.interview,
      },
      {
        id: 2,
        title: activitiesContent.title.bestPracticesFrame,
        description: activitiesContent.description.bestPracticesFrame,
        icon: activitiesContent.icon.bestPracticesFrame,
      },
      {
        id: 3,
        title: activitiesContent.title.codeReview,
        description: activitiesContent.description.codeReview,
        icon: activitiesContent.icon.codeReview,
        links: [
          {
            href: linkDocs.en.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: activitiesContent.title.finalProject,
        description: activitiesContent.description.finalProject,
        icon: activitiesContent.icon.finalProject,
      },
    ],
  },
];
