import { COURSE_TITLES } from './courseTitles.data';
import { ROUTES } from '@/app/const';
import angular from '@/shared/assets/icons/angular.svg';
import angularSmall from '@/shared/assets/icons/footer/angular.webp';
import jsSmall from '@/shared/assets/icons/footer/javascript.webp';
import reactSmall from '@/shared/assets/icons/footer/react.webp';
import javascript from '@/shared/assets/icons/javascript.webp';
import react from '@/shared/assets/icons/react.svg';
import { MentorshipCourse } from 'data';

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
    bestPracticesFrame: 'The mentor shows what code constructs are best to use based on his experience. Helps to understand possible future problems in the student\'s solution and ways to solve them',
    bestPracticesJS: 'The mentor shows what code constructs are best to use based on his experience. Suggests how to better organize the structure of the application',
    finalProject: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
  },
};

const linkDocs = {
  js: {
    mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
    courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md',
    interview: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/first-interview.md',
    codeReview: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
    finalProject: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/modules/final-task/README.md',
  },
  jsRu: {
    mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/rs-school-mentor.md',
    courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md',
    interview: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/mentoring-first-interview.md',
    codeReview: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/pull-request-review-process.md',
  },
  react: {
    mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
    courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/README.md',
    codeReview: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
    interview: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/interview.md',
  },
  angular: {
    mentorDocs: 'https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring',
    courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/angular/README.md',
    codeReview: 'https://github.com/rolling-scopes-school/tasks/blob/master/angular/mentoring/pull-request-review-process.md',
  },
};

export const mentorshipCoursesDefault: MentorshipCourse = {
  id: 0,
  lang: 'en',
  detailsUrl: `/${ROUTES.MENTORSHIP}`,
  links: {
    icon: [images.angular, images.react, images.js],
    mentorDocs: linkDocs.js.mentorDocs,
    courseDocs: linkDocs.js.courseDocs,
  },
  details: [
    'The duration of mentoring is 8 - 19 weeks',
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
          href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/first-interview.md',
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
          href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
          linkTitle: 'Details about code review',
        },
      ],
    },
    {
      id: 4,
      title: texts.title.finalProject,
      description: texts.description.finalProject,
      links: [
        {
          href: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/modules/final-task/README.md',
          linkTitle: 'Details about final task',
        },
      ],
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
      mentorDocs: linkDocs.js.mentorDocs,
      courseDocs: linkDocs.js.courseDocs,
    },
    details: [
      'The duration of mentoring is 18 - 19 weeks',
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
            href: linkDocs.js.interview,
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
            href: linkDocs.js.codeReview,
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
        links: [
          {
            href: linkDocs.js.finalProject,
            linkTitle: 'Details about final task',
          },
        ],
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
      mentorDocs: linkDocs.jsRu.mentorDocs,
      courseDocs: linkDocs.jsRu.courseDocs,
    },
    details: [
      'Длительность менторства 18 - 19 недель',
      'Формат: онлайн',
      'Ментор курирует от 2 до 6 студентов',
      'Необходимо уделять 3 - 5 часов в неделю',
    ],
    activities: [
      {
        id: 1,
        title: 'Проведение технического интервью',
        description: 'По результату которого ментор принимает решение о работе со студентом. Интервью проводятся с 2+ студентами - общий размер команды определяется ментором в зависимости от его загруженности',
        links: [
          {
            href: linkDocs.jsRu.interview,
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
            href: linkDocs.jsRu.codeReview,
            linkTitle: 'Подробнее о ревью кода',
          },
        ],
      },
      {
        id: 4,
        title: 'Проведение двух CoreJS интервью',
        description: 'Ментор проводит два интервью со студентами других менторов по основным темам курса. Участие в интервью позволяет студентам не только увидеть свои пробелы в знаниях, но почувствовать атмосферу подобных встреч',
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
      mentorDocs: linkDocs.react.mentorDocs,
      courseDocs: linkDocs.react.courseDocs,
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
            href: linkDocs.react.codeReview,
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 3,
        title: texts.title.interview,
        description: texts.description.interviewCore,
        links: [
          {
            href: linkDocs.react.interview,
            linkTitle: 'Details about technical interview',
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
  {
    id: 4,
    title: COURSE_TITLES.ANGULAR,
    description: '',
    iconSmall: angularSmall,
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`,
    links: {
      icon: [images.angular],
      mentorDocs: linkDocs.angular.mentorDocs,
      courseDocs: linkDocs.angular.courseDocs,
    },
    details: [
      'The duration of mentoring is 8 - 10 weeks',
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
            href: linkDocs.angular.codeReview,
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
