import type { CourseMap } from './required.types';

export const courseDataMap: CourseMap = {
  'js / front-end en': {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: [
        'Basic knowledge of HTML, CSS, Javascript is highly recommended before starting the course.',
        'Basic computer science theory (data structures, algorithms, maths) is recommended before starting the course.',
        'Experience with using any IDE.',
        'English language level: Intermediate (B1) and up.',
        'Register through this page and join the official discord channel for the training participants.',
      ],
    },
    willLearn: [
      {
        title: 'What to do if you lack base knowledge?',
        description: [
          'In this case, you will have to spend enough time on self-preparation. We recommend:',
          [
            {
              id: 0,
              text: 'Take a course in ',
              title: 'Computer Science.',
              link: 'https://rkhaslarov.github.io/computer-science-introduction/#introduction',
            },
          ],
          [
            {
              id: 1,
              text: 'Read a good ',
              title: 'Javascript tutorial.',
              link: 'https://javascript.info/',
            },
          ],
          [
            {
              id: 2,
              text: 'Use the ',
              title: 'Codewars platform',
              link: 'https://www.codewars.com/kata/search/javascript',
            },
            {
              id: 3,
              text: ' to solve practical tasks. You can start with ',
              title: 'simpler ones.',
              link: 'https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-8&beta=false',
            },
          ],
          'Take free online courses:',
          [
            {
              id: 4,
              text: '',
              title: 'Learn the Command Line  ',
              link: 'https://www.codecademy.com/learn/learn-the-command-line',
            },
          ],
          [
            {
              id: 5,
              text: '',
              title: 'Learn Git ',
              link: 'https://www.codecademy.com/learn/learn-git',
            },
          ],
          [
            {
              id: 6,
              text: '',
              title: 'Algorithms. ',
              link: 'https://www.coursera.org/learn/algorithms-part1',
            },
          ],
          'Believe in your strength!',
        ],
      },
    ],
  },
  'js / front-end ru': {
    title: 'Что нужно знать до начала',
    knowBefore: {
      title: 'Требуется до начала',
      description: [
        'Рекомендуется иметь базовые знания HTML, CSS, JavaScript перед началом курса.',
        'Рекомендуется иметь базовые знания компьютерных наук (структуры данных, алгоритмы, математика) перед началом курса.',
        'Опыт использования любой среды разработки.',
        'Уровень владения английским языком: Средний (B1) и выше.',
        'Зарегистрируйтесь на этой странице и присоединитесь к официальному каналу Discord для участников обучения.',
      ],
    },
    willLearn: [
      {
        title: 'Что делать, если у вас нет базовых знаний?',
        description: [
          'В этом случае вам придется потратить достаточно времени на самоподготовку. Мы рекомендуем:',
          [
            {
              id: 0,
              text: 'Пройти курс по ',
              title: 'Computer Science.',
              link: 'https://rkhaslarov.github.io/computer-science-introduction/#introduction',
            },
          ],
          [
            {
              id: 1,
              text: 'Прочитать хороший ',
              title: 'учебник по JavaScript.',
              link: 'https://learn.javascript.ru/',
            },
          ],
          [
            {
              id: 2,
              text: 'Использовать платформу ',
              title: 'Codewars',
              link: 'https://www.codewars.com/kata/search/javascript',
            },
            {
              id: 3,
              text: ' для решения практических задач. Можно начать с ',
              title: 'более простых.',
              link: 'https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-8&beta=false',
            },
          ],
          'Пройти бесплатные онлайн-курсы:',
          [
            {
              id: 4,
              text: '',
              title: 'Изучить command line ',
              link: 'https://www.codecademy.com/learn/learn-the-command-line',
            },
          ],
          [
            {
              id: 5,
              text: '',
              title: 'Изучить Git ',
              link: 'https://www.codecademy.com/learn/learn-git',
            },
          ],
          [
            {
              id: 6,
              text: '',
              title: 'Алгоритмы. ',
              link: 'https://www.coursera.org/learn/algorithms-part1',
            },
          ],
          'Верьте в свои силы!',
        ],
      },
    ],
  },
  'js / front-end pre-school ru': {
    title: 'Что следует сделать до старта курса',
    willLearn: [
      {
        title: '',
        description: [
          [
            {
              id: 0,
              text: 'Зарегистрироваться на платформе ',
              title: 'RS School',
              link: 'https://app.rs.school/registry/student?course=js-fe-preschool-2024q2',
            },
            {
              id: 1,
              text: '. После регистрации вы сможете найти себя в ',
              title: 'Score',
              link: 'https://app.rs.school/course/score?course=js-fe-preschool-2024q2',
            },
            {
              id: 2,
              text: '.',
              title: '',
              link: '',
            },
          ],
          [
            {
              id: 3,
              text: 'Прочитать документацию о ',
              title: 'школе',
              link: 'https://docs.rs.school/#/',
            },

            {
              id: 4,
              text: '.',
              title: '',
              link: '',
            },
          ],
          [
            {
              id: 5,
              text: 'Присоединиться в ',
              title: 'Discord',
              link: 'https://discord.gg/gFnRh8Sudg',
            },
            {
              id: 6,
              text: ' чат курса и указать в нике свой GitHub аккаунт. Инструкция ',
              title: 'тут',
              link: 'https://docs.rs.school/#/rs-school-chats',
            },

            {
              id: 7,
              text: '.',
              title: '',
              link: '',
            },
          ],
        ],
      },
      {
        title: '',
        description: [
          'Запомнить правила хорошего тона RS School:',
          [
            {
              id: 8,
              text: ' Если вам помогли, не забудьте написать спасибо. Желательно использовать специальный канал ',
              title: 'RS School',
              link: 'https://app.rs.school/gratitude)',
            },

            {
              id: 9,
              text: '.',
              title: '',
              link: '',
            },
          ],
          [
            {
              id: 10,
              text: 'Если вам помогли с каким-то вопросом и вы видите, что у других студентов возникли подобные сложности, то очень желательно не проходить мимо и помочь в свою очередь.',
              title: '',
              link: '',
            },
          ],

          [
            {
              id: 11,
              text: 'Если у вас какие-либо проблемы с выполнением заданий или платформой школы (RS App) - не следует писать в личные сообщения администраторам или модераторам.',
              title: '',
              link: '',
            },
          ],
        ],
      },
    ],
  },
  awsFundamentals: {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: [
        'Beginners welcome!',
        'No AWS Cloud experience is necessary.',
        'We will use the AWS Free Tier',
        'No IT prerequisites required',
      ],
    },
    willLearn: [
      {
        title: 'What you will learn',
        description: [
          'Networking Fundamentals',
          'Cloud Technical Fundamentals',
          'AWS Cloud Essentials',
          'Basic AWS Services (EC2, ELB, ASG, RDS, ElastiCache, S3)',
        ],
      },
    ],
  },
  awsDev: {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: [
        'You should be comfortable with at least one programming language (such as Python, JavaScript, Java, or C#) and have a good understanding of basic web development concepts, including HTML, CSS, and JavaScript.',
        'English language level: Intermediate (B1) and up.',
        'Being able to spend at least 10 hours per week studying.',
      ],
    },
    willLearn: [],
  },
  nodejs: {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: ['Solid knowledge of JavaScript, including ES6, is required for this course.'],
    },
    willLearn: [],
  },
  angular: {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: [
        'JavaScript',
        'Typescript',
        'Git, GitHub (clone, add, commit, push, pull, merge, rebase, work with Pull Request)',
        'npm, webpackCSS3 / HTML5',
        'Chrome DevTools Figma',
        'Understanding the concept of REST API',
      ],
    },
    willLearn: [],
  },
};
