import { COURSE_TITLES, CourseMap } from './course-titles.data';

export const courseDataMap: CourseMap = {
  [COURSE_TITLES.JS_EN]: {
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
  [COURSE_TITLES.JS_RU]: {
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
  [COURSE_TITLES.JS_PRESCHOOL_RU]: {
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
        title: 'Запомнить правила хорошего тона RS School:',
        description: [
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
              text: 'Если вам помогли с каким-то вопросом и вы видите, что у других студентов возникли подобные сложности, то желательно не проходить мимо и помочь в свою очередь.',
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
  [COURSE_TITLES.AWS_FUNDAMENTALS]: {
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
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: {
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
  [COURSE_TITLES.NODE]: {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: ['Solid knowledge of JavaScript, including ES6, is required for this course.'],
    },
    willLearn: [],
  },
  [COURSE_TITLES.ANGULAR]: {
    title: 'What you should know before starting',
    knowBefore: {
      title: 'Required before the start',
      description: [
        'JavaScript, TypeScript Basics, CSS3, HTML5, NPM',
        'Git, GitHub (clone, add, commit, push, pull, merge, rebase, work with Pull Request)',
        'Chrome DevTools',
        'Figma',
        'Understanding the concept of REST API',
      ],
    },
    willLearn: [],
  },
  [COURSE_TITLES.AWS_DEVOPS]: {
    title: 'What is required for training?',
    knowBefore: {
      title: 'Required before the start',
      description: [
        'English proficiency level from B1 (Intermediate) and higher',
        'Solid knowledge of Git',
        'Good understanding of hypervisors and networking',
        'Solid knowledge of OS (Linux/Windows)',
        'Experience in scripting languages: PowerShell, Bash, or Python',
        'Expertise and practice with Docker',
      ],
    },
    willLearn: [
      {
        title: 'Nice to have:',
        description: ['Knowledge and experience with any cloud platforms (AWS, GCP, Azure)'],
      },
    ],
  },
  [COURSE_TITLES.SHORT_TRACK]: {
    title: 'Что требуется для прохождения курса?',
    knowBefore: {
      title: 'Необходимо до начала',
      description: [
        'Вы являетесь текущим студентом Stage#1 или выпускником/участником предыдущих наборов RS School.',
        'У вас есть твёрдые навыки front-end разработки и уровень английского языка не ниже B1 (Intermediate).',
        'У вас есть базовые знания алгоритмов и структур данных, опыт решения алгоритмических задач.',
        'Вы готовы уделять обучению как минимум 20-40 часов в неделю.',
        'Вы проживаете в одной из следующих стран: Грузия, Узбекистан, Казахстан, Кыргызстан, Армения, Польша, Литва, Турция, Хорватия, Болгария, Венгрия, Румыния, Сербия',
      ],
    },
    willLearn: [
      {
        title: 'Требования к документам для Польши:',
        description: [
          'Разрешение на долгосрочное проживание в ЕС (Karta rezydenta długoterminowego UE)',
          'Карта постоянного проживания (Karta stałego pobytu)',
          'Польское гражданство (Obywatelstwo polskie)',
          'Карта временного проживания (Karta czasowego pobytu) с отметкой о доступе к рынку труда (dostęp do rynku pracy)',
        ],
      },
      {
        title: 'Требования к документам для Литвы:',
        description: [
          'Гражданство Литвы или Латвии (Lietuvos Respublikos pilietybė)',
          'Разрешение на постоянное проживание (Nuolatinis leidimas gyventi)',
          'Литовская голубая карта ЕС (ES mėlynoji kortelė)',
          'Разрешение на временное проживание с правом на работу (Laikinas leidimas gyventi su teise dirbti)',
        ],
      },
      {
        title: 'Требования к документам для Турции:',
        description: ['Гражданство Турецкой Республики'],
      },
      {
        title: 'Хорватия, Болгария, Венгрия, Румыния, Сербия:',
        description: ['Трудоустройство возможно в зависимости от ваших документов и опыта'],
      },
    ],
  },
};
