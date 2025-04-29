import type { StudyPathPage, StudyPathProps } from './study-path-data.types';
import { ROUTES } from '@/core/const';
import AWSIcon from '@/shared/assets/icons/aws-black.svg';
import HTMLIcon from '@/shared/assets/icons/html5.svg';
import JSIcon from '@/shared/assets/icons/javascript.svg';
import NodeJSIcon from '@/shared/assets/icons/node-js.svg';
import ReactAngIcon from '@/shared/assets/icons/react-angular.svg';
import feJsStage1 from '@/shared/assets/stages/stage-1.webp';
import feJsStage2 from '@/shared/assets/stages/stage-2.webp';
import feJsStage3 from '@/shared/assets/stages/stage-3.webp';

export const studyPath: Record<StudyPathPage['page'], StudyPathProps> = {
  'courses': {
    sectionTitle: 'Choose what you want to learn',
    sectionIntro:
      'A full-stack developer is someone who has expertise in both frontend (what users see) and backend (server and database) development. This dual skill set enables them to supervise and implement projects from start to finish. Businesses today prioritize hiring full-stack developers because they can efficiently bridge various technological aspects, resulting in faster product development.',
    stages: [
      {
        id: 1,
        title: 'Pre-school (RU)',
        intro:
          'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'Pre-school (RU)',
                link: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: HTMLIcon,
          alt: 'pre-school logo',
          className: 'stage-logo',
        },
      },
      {
        id: 2,
        title: 'JS/TS/FE Fundamentals',
        intro:
          'Dive deep into the world of JavaScript, TypeScript, and Frontend development. Understand the core concepts and set yourself up for success.',
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'JS/TS/FE Fundamentals (RU)',
                link: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
                external: false,
              },
              {
                id: 2,
                text: '',
                title: 'JS/TS/FE Fundamentals (EN)',
                link: `/${ROUTES.COURSES}/${ROUTES.JS}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: JSIcon,
          alt: 'JS logo',
          className: 'stage-logo',
        },
      },
      {
        id: 3,
        title: 'React or Angular',
        intro:
          "Choose your framework and become proficient. Whether you're Team React or Team Angular, we ensure you become an expert",
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'React',
                link: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
                external: false,
              },
              {
                id: 2,
                text: '',
                title: 'Angular',
                link: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: ReactAngIcon,
          alt: 'react and angular logo',
          className: 'stage-logo',
        },
      },
      {
        id: 4,
        title: 'NodeJS',
        intro:
          "Grasp the power of backend development. With Nodejs, you'll learn to build robust and scalable applications",
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'NodeJS',
                link: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: NodeJSIcon,
          alt: 'Node JS logo',
          className: 'stage-logo',
        },
      },
      {
        id: 5,
        title: 'AWS Fundamentals',
        intro:
          'Delve into the cloud with Amazon Web Services. Understand the essentials and ensure your apps are hosted seamlessly.',
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'AWS Fundamentals',
                link: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: AWSIcon,
          alt: 'aws logo',
          className: 'stage-logo',
        },
      },
      {
        id: 6,
        title: 'AWS Developer',
        intro:
          'Go beyond the basics. Become an AWS pro and unlock the potential of cloud development.',
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'AWS Developer',
                link: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: AWSIcon,
          alt: 'aws logo',
          className: 'stage-logo',
        },
      },
      {
        id: 7,
        title: 'AWS DevOps',
        intro:
          'If you are looking for an entry point to kickstart your IT career as a DevOps engineer, then this AWS course challenge is what you need.',
        modules: [
          {
            id: 1,
            text: '',
            links: [
              {
                id: 1,
                text: '',
                title: 'AWS DevOps',
                link: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
                external: false,
              },
            ],
            marked: false,
          },
        ],
        image: {
          src: AWSIcon,
          alt: 'aws logo',
          className: 'stage-logo',
        },
      },
    ],
  },
  'jsEn': {
    sectionTitle: 'Choose what you want to learn',
    sectionIntro:
      'A full-stack developer is someone who has expertise in both frontend (what users see) and backend (server and database) development. This dual skill set enables them to supervise and implement projects from start to finish. Businesses today prioritize hiring full-stack developers because they can efficiently bridge various technological aspects, resulting in faster product development.',
    stages: [
      {
        id: 1,
        title: 'Stage 1',
        intro:
          'Everyone registered is automatically eligible for this stage. The first stage lasts 15 weeks. This stage includes practical assignments and tests. Evaluation is either automatic or in the form of cross-checking between students.',
        modules: [
          {
            id: 1,
            text: 'Topics covered: Git, HTML, CSS, Javascript basics',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage1,
          alt: 'working students',
          className: 'stage-image',
        },
      },
      {
        id: 2,
        title: 'Stage 2',
        intro:
          'To pass to the second stage, you must successfully complete the tasks and tests from the first stage without missing the deadlines, and pass a mock technical interview with one of our mentors.The second stage lasts 20 weeks. You will be assigned a personal mentor who will answer your questions from now on. This stage includes practical exercises and tests which will be reviewed and evaluated by your mentor.',
        modules: [
          {
            id: 1,
            text: 'Topics covered: Advanced Javascript, Security, Testing, Agile, Networking, Web development tools',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage2,
          alt: 'working students',
          className: 'stage-image',
        },
      },
      {
        id: 3,
        title: 'Stage 3',
        intro:
          'Learning either React or Angular Framework (the choice belongs to the student). To enroll, you need to successfully complete two stages of training. Format: mentoring, self-study, webinars, and communication on Discord. Practical sessions are reviewed and evaluated by mentors, as well as through cross-checking methods. Throughout the training, mock interviews are conducted with different mentors.',
        modules: [
          {
            id: 1,
            text: 'Choose a Framework: React or Angular.',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Collaborative development of a final project.',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Framework-based interviews.',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: feJsStage3,
          alt: 'student works',
          className: 'stage-image',
        },
      },
    ],
  },
  'jsRu': {
    sectionTitle: 'Выберите, чему вы хотите научиться',
    sectionIntro:
      'Full-stack разработчик — это человек, обладающий опытом как в области внешнего интерфейса (то, что видят пользователи), так и в области внутреннего интерфейса (сервера и базы данных). Этот двойной набор навыков позволяет им контролировать и реализовывать проекты от начала до конца. Сегодня компании отдают приоритет найму разработчиков полного стека, потому что они могут эффективно объединить различные технологические аспекты, что приводит к более быстрой разработке продукта.',
    stages: [
      {
        id: 1,
        title: 'Этап 1',
        intro:
          'Все зарегистрированные автоматически имеют право на прохождение этого этапа. Первый этап продолжается 15 недель. На этом этапе включаются практические задания и тесты. Оценка может быть как автоматической, так и в форме перекрестной проверки между учащимися.',
        modules: [
          {
            id: 1,
            text: 'Темы: Git, HTML, CSS, Основы Javascript',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage1,
          alt: 'студенты за работой',
          className: 'stage-image',
        },
      },
      {
        id: 2,
        title: 'Этап 2',
        intro:
          'Чтобы перейти на второй этап, вам необходимо успешно выполнить задания и тесты первого этапа без пропуска сроков и пройти пробное техническое интервью с одним из наших менторов. Второй этап длится 20 недель. Вам будет назначен личный ментор, который будет отвечать на ваши вопросы. Этот этап включает в себя практические задания и тесты, которые будут проверяться и оцениваться вашим ментором, а также перекрестной проверкой других студентов. Помимо этого, проводятся пробные интервью с другими менторами.',
        modules: [
          {
            id: 1,
            text: 'Темы: Advanced Javascript, Security, Testing, Agile, Networking, Web development tools',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage2,
          alt: 'студенты за работой',
          className: 'stage-image',
        },
      },
      {
        id: 3,
        title: 'Этап 3',
        intro:
          'Обучение применению React или Angular (выбор за студентом). Чтобы записаться на курс, необходимо успешно пройти первые два этапа обучения. Формат: менторство, самостоятельные занятия, вебинары и общение в Discord. Практические занятия разбираются и оцениваются наставниками, а также перекрестной проверкой другими студентами. На протяжении всего обучения проводятся пробные интервью с другими менторами.',
        modules: [
          {
            id: 1,
            text: 'Выберите фреймворк: React или Angular.',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Коллективная разработка финального проекта.',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Фреймворк-зависимые интервью.',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: feJsStage3,
          alt: 'студент изучает материал',
          className: 'stage-image',
        },
      },
    ],
  },
  'angular': {
    sectionTitle: 'Course Curriculum',
    sectionIntro: 'This program will have theory and practice on the following topic:',
    stages: [
      {
        id: 1,
        title: 'Week #1',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Module "Angular Intro. TypeScript."',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Module "Angular. Components"',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Module "Angular. Directives & Pipes"',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 2,
        title: 'Week #2',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Module "Angular Intro. Task Review."',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Angular. Modules & Services, Dependency Injection',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Module "Angular. Directives & Pipes"',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Module "Angular. Routing"',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'Workshop',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 3,
        title: 'Week #3',
        intro: '',
        modules: [
          {
            id: 1,
            text: '"Angular. Components, Directives, Pipes" task review',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Module "RxJS & Observables"',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Module "Angular. HTTP"',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Module "Angular. Forms"',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'Workshop',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 4,
        title: 'Week #4',
        intro: '',
        modules: [
          {
            id: 1,
            text: '"Angular. Modules, Services, Routing" task review',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Module "Angular. Redux & NgRx"',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Module "Angular. Unit Test"',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Workshop',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 5,
        title: 'Week #5-8',
        intro: '',
        modules: [
          {
            id: 1,
            text: '"Angular. RxJS & HTTPClient & NgRx & Forms", task review',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Final Angular test',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Workshop',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: '"Project Management Application" final task',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 6,
        title: 'Week #9',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Cross-checking the "Project management application" final task',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
    ],
  },
  'awsDev': {
    sectionTitle: 'Course Curriculum',
    sectionIntro: 'This program will have theory and practice on the following topic:',
    stages: [
      {
        id: 1,
        title: 'Module 1. Cloud Introduction',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Fundamental theory about cloud computing',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Cloud service models, cloud deployment models, infrastructure-as-code',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Monolith vs microservices vs serverless',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'AWS intro, registration, Cloud Watch, IAM Repository structure',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 2,
        title: 'Module 2. Serving SPA',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'AWS Simple Storage Service overview',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Services & tools overview',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'AWS CloudFront overview',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Basic overview of deployment process to CloudFront and S3',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'AWS CLI overview',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 3,
        title: 'Module 3. Serverless API',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'AWS Lambda overview',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Introduction to collecting logs with AWS CloudWatch',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Lambda advanced features and configuration',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 4,
        title: 'Module 4. Integration with NoSQL Database',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Easy way to store data in cloud',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'AWS DynamoDB and how to use it',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 5,
        title: 'Module 5. Integration with S3',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'AWS S3 in-depth introduction',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'S3 storage classes and their use cases',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'S3 access control & encryption',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'S3 versioning, lifecycle management & events',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'Integration with S3 and Lambda overview',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 6,
        title: 'Module 6. Async Microservices Communication',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Async messaging overview',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'AWS SQS overview',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'AWS SNS overview',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Integration with SQS, SNS, and Lambda overview',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 7,
        title: 'Module 7. Authorization',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Authentication & authorization overview',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Lambda authorizer & API Gateway',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'AWS Cognito overview',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Cognito user pool',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'Cognito identity pool',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 8,
        title: 'Module 8. Integration with SQL Database',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Relational databases theory',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'SQL overview',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Overview of AWS database offering',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'AWS RDS and its engines',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'Serverless functions & AWS RDS',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 9,
        title: 'Module 9. Containerization',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Docker overview',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'Dockerfiles & images',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'Containers & VMs',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'Docker build optimizations',
            links: [],
            marked: true,
          },
          {
            id: 5,
            text: 'AWS Elastic Beanstalk overview',
            links: [],
            marked: true,
          },
          {
            id: 6,
            text: 'AWS EB CLI',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
      {
        id: 10,
        title: 'Module 10. Backend for Frontend',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Backend for frontend overview',
            links: [],
            marked: true,
          },
          {
            id: 2,
            text: 'BFF as pattern',
            links: [],
            marked: true,
          },
          {
            id: 3,
            text: 'API Gateway as BFF',
            links: [],
            marked: true,
          },
          {
            id: 4,
            text: 'AWS Elastic Beanstalk configuration',
            links: [],
            marked: true,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
    ],
  },
  'short-track': {
    sectionTitle: 'Short Track',
    sectionIntro:
      'Интенсивная программа подготовки для опытных разработчиков, нацеленная на быстрое развитие навыков до уровня, необходимого для успешного трудоустройства. Программа включает в себя следующие этапы:',
    stages: [
      {
        id: 1,
        title: 'Шаг 1',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Подача заявки и предварительный отбор. При большом количестве заявок может быть назначено дополнительное тестовое задание.',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage1,
          alt: 'студенты за работой',
          className: 'stage-image',
        },
      },
      {
        id: 2,
        title: 'Шаг 2',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Вступительные технические собеседования для оценки текущего уровня знаний и определения готовности к интенсивному обучению.',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage3,
          alt: 'студенты за работой',
          className: 'stage-image',
        },
      },
      {
        id: 3,
        title: 'Шаг 3',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Присоединитесь к команде из 12-20 человек под руководством ментора. Самостоятельное обучение с предоставленными материалами, регулярные Q&A сессии, пробные собеседования и интенсивная практика.',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: feJsStage2,
          alt: 'студенты за работой',
          className: 'stage-image',
        },
      },
      {
        id: 4,
        title: 'Шаг 4',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'В конце первого месяца обучения вы вместе с ментором определитесь с фреймворком. Примерное соотношение: 60% React / 40% Angular.',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: ReactAngIcon,
          alt: 'логотипы react и angular',
          className: 'stage-image',
        },
      },
      {
        id: 5,
        title: 'Шаг 5',
        intro: '',
        modules: [
          {
            id: 1,
            text: 'Разработка финального проекта индивидуально или в команде из 3 человек (зависит от задания) под руководством ментора.',
            links: [],
            marked: false,
          },
        ],
        image: {
          src: null,
          alt: '',
          className: '',
        },
      },
    ],
  },
};
