import { COURSE_TITLES } from './courseTitles.data.ts';
import { ROUTES } from '@/app/const';
import angular from '@/shared/assets/icons/angular.svg';
import angularSmall from '@/shared/assets/icons/footer/angular.webp';
import jsSmall from '@/shared/assets/icons/footer/javascript.webp';
import reactSmall from '@/shared/assets/icons/footer/react.webp';
import javascript from '@/shared/assets/icons/javascript.webp';
import react from '@/shared/assets/icons/react.svg';
import { DiscordIcon, TelegramIcon } from '@/shared/icons';
import { MentorshipCourse } from 'data';

const angularImage = {
  href: angular,
  alt: 'Angular image',
};
const reactImage = {
  href: react,
  alt: 'React image',
};
const javascriptImage = {
  href: javascript,
  alt: 'Javascript image',
};

export const mentorshipCoursesDefault: MentorshipCourse = {
  id: 0,
  lang: 'en',
  detailsUrl: `/${ROUTES.MENTORSHIP}`,
  links: {
    icon: [angularImage, reactImage, javascriptImage],
    mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
    courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/README.md',
    social: [
      {
        title: 'Telegram',
        href: 'https://t.me/+VgIgfltnf9T1svzN',
        icon: TelegramIcon(),
      },
      {
        title: 'Discord',
        href: 'https://discord.gg/fBvpUURPVm',
        icon: DiscordIcon(),
      },
    ],
  },
  details: [
    'The duration of mentoring is 8 - 19 weeks',
    'Format: online',
    'A desire to mentor from 2 to 6 students online',
    'An ability to dedicate 3 to 5 hours per week',
  ],
  activities: [
    {
      id: 1,
      title: 'Conducting technical interview',
      description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
      links: [
        {
          href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/first-interview.md',
          linkTitle: 'Details about technical interview',
        },
      ],
    },
    {
      id: 2,
      title: 'Best practices',
      description: 'The mentor shows what code constructs are best to use based on his experience. Suggests how to better organize the structure of the application',
    },
    {
      id: 3,
      title: 'Code review',
      description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
      links: [
        {
          href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
          linkTitle: 'Details about code review',
        },
      ],
    },
    {
      id: 4,
      title: 'Supervising a team assignment',
      description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
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
    iconSmall: jsSmall,
    description: '',
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.JS}`,
    links: {
      icon: [javascriptImage],
      mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
      courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md',
      social: [],
    },
    details: [
      'The duration of mentoring is 18 - 19 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    activities: [
      {
        id: 1,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/first-interview.md',
            linkTitle: 'Details about technical interview',
          },
        ],
      },
      {
        id: 2,
        title: 'Best practices',
        description: 'The mentor shows what code constructs are best to use based on his experience. Suggests how to better organize the structure of the application',
      },
      {
        id: 3,
        title: 'Code review',
        description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: 'Conducting two CoreJS interviews',
        description: 'The mentor conducts two interviews with students of other mentors on major topics of the course. Participation in interviews allows students not only to see their knowledge gaps, but also to feel the atmosphere of such meetings',
      },
      {
        id: 5,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/modules/final-task/README.md',
            linkTitle: 'Details about CoreJS interviews',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: COURSE_TITLES.JS_RU,
    iconSmall: jsSmall,
    description: '',
    lang: 'ru',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`,
    links: {
      icon: [javascriptImage],
      mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/rs-school-mentor.md',
      courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md',
      social: [
        {
          title: 'Telegram',
          href: 'https://t.me/+VgIgfltnf9T1svzN',
          icon: TelegramIcon(),
        },
        {
          title: 'Discord',
          href: 'https://discord.gg/fBvpUURPVm',
          icon: DiscordIcon(),
        },
      ],
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
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/mentoring-first-interview.md',
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
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/pull-request-review-process.md',
            linkTitle: 'Подробнее о ревью кода',
          },
        ],
      },
      {
        id: 4,
        title: 'Проведение двух CoreJS интервью',
        description: 'Ментор проводит два интервью со студентами других менторов по основным темам курса. Участие в интервью позволяет студентам не только увидеть свои пробелы в знаниях, но почувствовать атмосферу подобных встреч ',
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
    iconSmall: reactSmall,
    description: '',
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.REACT}`,
    links: {
      icon: [reactImage],
      mentorDocs: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
      courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/README.md',
      social: [],
    },
    details: [
      'The duration of mentoring is 12 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    activities: [
      {
        id: 1,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/interview.md',
            linkTitle: 'Details about technical interview',
          },
        ],
      },
      {
        id: 2,
        title: 'Best practices used in the framework',
        description: 'The mentor shows what code constructs are best to use based on his experience. Helps to understand possible future problems in the student\'s solution and ways to solve them',
      },
      {
        id: 3,
        title: 'Code review',
        description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
      },
    ],
  },
  {
    id: 4,
    title: COURSE_TITLES.ANGULAR,
    iconSmall: angularSmall,
    description: '',
    lang: 'en',
    detailsUrl: `/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`,
    links: {
      icon: [angularImage],
      mentorDocs: 'https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring',
      courseDocs: 'https://github.com/rolling-scopes-school/tasks/blob/master/angular/README.md',
      social: [],
    },
    details: [
      'The duration of mentoring is 8 - 10 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    activities: [
      {
        id: 1,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
      },
      {
        id: 2,
        title: 'Best practices used in the framework',
        description: 'The mentor shows what code constructs are best to use based on his experience. Helps to understand possible future problems in the student\'s solution and ways to solve them',
      },
      {
        id: 3,
        title: 'Code review',
        description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/angular/mentoring/pull-request-review-process.md',
            linkTitle: 'Details about code review',
          },
        ],
      },
      {
        id: 4,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
      },
    ],
  },
];
