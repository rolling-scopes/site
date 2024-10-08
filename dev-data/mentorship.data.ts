import { COURSE_TITLES } from './courseTitles.data.ts';
import { ROUTES } from '@/app/const';
import { MentorshipCourse } from 'data';

export const mentorshipCourses: MentorshipCourse[] = [
  {
    id: 0,
    courseTitle: '',
    lang: 'en',
    pageUrl: ROUTES.MENTORSHIP,
    description: [
      'The duration of mentoring is 8 - 10 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online or in person',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    mentorActivities: [
      {
        id: 1,
        title: 'Best practices',
        description: 'The mentor shows what code constructs are best to use based on his experience',
      },
      {
        id: 2,
        title: 'Code review',
        description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 3,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/first-interview.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 4,
        title: 'Conducting two CoreJS interviews',
        description: 'The mentor conducts two interviews with students of other mentors on major topics of the course',
      },
      {
        id: 5,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/modules/final-task/README.md',
            linkTitle: 'Read more',
          },
        ],
      },
    ],
    mentorDocsUrl: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
    courseDocsUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/README.md',
    benefits: [
      'Opportunity to develop a new colleague',
      'Gaining new experience, search for new colleagues',
      'Opportunity to share knowledge',
      'You have completed the school course, feel confident and now it\'s your time to “Teach It Forward”',
      'Teaching others, you learn yourself',
      'Opportunity to improve tasks or create your own',
      'You\'re on the lookout for a great community that will always help you learn and grow.',
    ],
  },
  {
    id: 1,
    courseTitle: COURSE_TITLES.ANGULAR,
    lang: 'en',
    pageUrl: ROUTES.ANGULAR,
    description: [
      'The duration of mentoring is 8 - 10 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online or in person',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    mentorActivities: [
      {
        id: 1,
        title: 'Best practices used in the framework',
        description: 'The mentor shows what code constructs are best to use based on his experience. Helps to understand possible future problems in the student\'s solution and ways to solve them',
      },
      {
        id: 2,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
      },
      {
        id: 3,
        title: 'Code review',
        description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/angular/mentoring/pull-request-review-process.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 4,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
      },
    ],
    mentorDocsUrl: 'https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring',
    courseDocsUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/angular/README.md',
    benefits: [
      'Opportunity to develop a new colleague',
      'Gaining new experience, search for new colleagues',
      'Opportunity to share knowledge',
      'You have completed the school course, feel confident and now it\'s your time to “Teach It Forward”',
      'Teaching others, you learn yourself',
      'Opportunity to improve tasks or create your own',
      'You\'re on the lookout for a great community that will always help you learn and grow.',
    ],
  },
  {
    id: 2,
    courseTitle: COURSE_TITLES.REACT,
    lang: 'en',
    pageUrl: ROUTES.REACT,
    description: [
      'The duration of mentoring is 12 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online or in person',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    mentorActivities: [
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
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 4,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/interview.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 5,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
      },
    ],
    mentorDocsUrl: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
    courseDocsUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/README.md',
    benefits: [
      'Opportunity to develop a new colleague',
      'Gaining new experience, search for new colleagues',
      'Opportunity to share knowledge',
      'You have completed the school course, feel confident and now it\'s your time to “Teach It Forward”',
      'Teaching others, you learn yourself',
      'Opportunity to improve tasks or create your own',
      'You\'re on the lookout for a great community that will always help you learn and grow.',
    ],
  },
  {
    id: 3,
    courseTitle: COURSE_TITLES.JS_EN,
    lang: 'en',
    pageUrl: ROUTES.JS,
    description: [
      'The duration of mentoring is 18 - 19 weeks',
      'Format: online',
      'A desire to mentor from 2 to 6 students online or in person',
      'An ability to dedicate 3 to 5 hours per week',
    ],
    mentorActivities: [
      {
        id: 1,
        title: 'Best practices',
        description: 'The mentor shows what code constructs are best to use based on his experience',
      },
      {
        id: 2,
        title: 'Code review',
        description: 'The mentor reviews the code, points out inaccuracies, suggests how to improve them. The code review helps the student to develop the necessary skills to work in a team',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/pull-request-review-process.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 3,
        title: 'Conducting technical interview',
        description: 'The mentor makes a decision about working with the student. Interviews are conducted with 2+ students - the total size of their team is determined by the mentor based on their workload',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/first-interview.md',
            linkTitle: 'Read more',
          },
        ],
      },
      {
        id: 4,
        title: 'Conducting two CoreJS interviews',
        description: 'The mentor conducts two interviews with students of other mentors on major topics of the course',
      },
      {
        id: 5,
        title: 'Supervising a team assignment',
        description: 'The mentor\'s experience and practical knowledge will help organize students to work on a team project',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/modules/final-task/README.md',
            linkTitle: 'Read more',
          },
        ],
      },
    ],
    mentorDocsUrl: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/en/rs-school-mentor.md',
    courseDocsUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md',
    benefits: [
      'Opportunity to develop a new colleague',
      'Gaining new experience, search for new colleagues',
      'Opportunity to share knowledge',
      'You have completed the school course, feel confident and now it\'s your time to “Teach It Forward”',
      'Teaching others, you learn yourself',
      'Opportunity to improve tasks or create your own',
      'You\'re on the lookout for a great community that will always help you learn and grow.',
    ],
  },
  {
    id: 4,
    courseTitle: COURSE_TITLES.JS_RU,
    lang: 'ru',
    pageUrl: ROUTES.JS_RU,
    description: [
      'Длительность менторства 18 - 19 недель',
      'Формат: онлайн',
      'Ментор курирует от 2 до 6 студентов',
      'Необходимо уделять 3 - 5 часов в неделю',
    ],
    mentorActivities: [
      {
        id: 1,
        title: 'Лучшие практики',
        description: 'Ментор показывает, какие конструкции кода лучше всего использовать, основываясь на своем опыте',
      },
      {
        id: 2,
        title: 'Ревью кода',
        description: 'Ментор просматривает код, указывает на неточности, предлагает, как их улучшить. Рецензирование кода помогает студенту развить необходимые навыки работы в команде.',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/pull-request-review-process.md',
            linkTitle: 'Подробнее',
          },
        ],
      },
      {
        id: 3,
        title: 'Проведение технического интервью',
        description: 'По результату которого ментор принимает решение о работе со студентом. Собеседования проводятся с 2+ студентами - общий размер команды определяется ментором в зависимости от его загруженности',
        links: [
          {
            href: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/mentoring-first-interview.md',
            linkTitle: 'Подробнее',
          },
        ],
      },
      {
        id: 4,
        title: 'Проведение двух CoreJS интервью',
        description: 'Ментор проводит два интервью со студентами других менторов по основным темам курса',
      },
      {
        id: 5,
        title: 'Курирование командного задания',
        description: 'Опыт и практические знания ментора помогут организовать студентов для работы над командным проектом',
      },
    ],
    mentorDocsUrl: 'https://github.com/rolling-scopes-school/docs/blob/master/docs/rs-school-mentor.md',
    courseDocsUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md',
    benefits: [
      'Ищете новых коллег для работы',
      'Закончили один из курсов школы и теперь пришло ваше время для “Teach It Forward”',
      'Знаете как улучшить существующие задания курса или хотите создать свое',
      'Решили попробовать себя в роли наставника',
      'Хотите делиться своим опытом и знаниями',
      'Ищете крутое сообщество увлеченных программированием людей, где всегда помогут и поддержат',
    ],
  },
];
