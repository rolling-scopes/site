import { Link } from 'react-router-dom';
import { Actions, Paragraph, Subtitle } from '@/app/components';

import awsPractitionerBadge from '@/assets/aws-cloud-pract-badge.webp';
import angularImg from '@/assets/rs-slope-angular.webp';
import awsDevImg from '@/assets/rs-slope-aws-dev.webp';
import awsFundamentalsImg from '@/assets/rs-slope-aws-fundamentals.webp';
import jsImg from '@/assets/rs-slope-js.webp';
import nodejsImg from '@/assets/rs-slope-nodejs.webp';
import reactEnImg from '@/assets/rs-slope-react-en.webp';
import reactRuImg from '@/assets/rs-slope-react-ru.webp';

export type CourseNames =
  | 'aws cloud dev'
  | 'angular'
  | 'js / front-end en'
  | 'js / front-end ru'
  | 'js / front-end pre-school ru'
  | 'aws fundamentals'
  | 'node.js'
  | 'react'
  | 'react ru'
  | 'aws fundamentals badge';

interface CourseInfo {
  title: string;
  content: JSX.Element[];
  image: string;
}

type ContentMap = {
  [key in CourseNames]: CourseInfo;
};

export const contentMap: ContentMap = {
  'aws cloud dev': {
    title: 'Training Program',
    content: [
      <Paragraph>
        This course is a step-by-step journey to become an AWS Certified Developer ‒ Associate
        through this course. You will gain practical experience working with various AWS services
        and technologies via over 10 hands-on tasks. During the course, you'll dive deep into AWS,
        from cloud computing basics to advanced integrations and deployment strategies, through nine
        carefully designed modules.
      </Paragraph>,
      <Paragraph>
        Be well-prepared to pass the "AWS Certified Developer - Associate" certification and
        confidently apply your skills in real-world projects by the end of the course.
      </Paragraph>,
      <Subtitle text="Course highlights:" />,
      <Actions
        actions={[
          'Build a single-page application (SPA) using AWS S3 and CloudFront',
          'Develop serverless APIs with AWS API Gateway and Lambda',
          'Integrate with databases and S3',
          'Master asynchronous microservices communication using SQS and SNS',
          'Explore authorization with Lambda Authorizers and Cognito',
          'Learn containerization with Docker and Elastic Beanstalk',
          'Implement backend-for-frontend using API Gateway',
        ]}
        marked
      />,
    ],
    image: awsDevImg,
  },
  'aws fundamentals': {
    title: 'Training Program',
    content: [
      <Paragraph>
        The AWS Certified Cloud Practitioner certification is a great entry-level certification for
        AWS. It's great at assessing how well you understand AWS, its services, and its ecosystem.
      </Paragraph>,
      <Paragraph>
        The course consists of weekly assignments that you can complete at your own pace, followed
        by a test that will help you evaluate your understanding of the materials. We expect that
        you will need to dedicate 5‒10 hours per week to complete the assignments. The total
        duration of the course is 5 weeks.
      </Paragraph>,
      <Paragraph>
        During the course, you will have access to online sessions led by AWS User Groups and RS
        School Mentors, where you can ask questions, discuss the materials, and get feedback.
      </Paragraph>,
    ],
    image: awsFundamentalsImg,
  },
  'node.js': {
    title: 'Course Topics',
    content: [
      <Paragraph>
        This course is designed for JavaScript / Front-End developers who want to get acquainted
        with Node.js and the server side of web application development.
      </Paragraph>,
      <Paragraph>
        The course consists of weekly assignments that you can complete at your own pace, followed
        by a test that will help you evaluate your understanding of the materials
      </Paragraph>,
      <Actions
        actions={[
          'Node.js basics',
          'Network communication. HTTP & WebSockets',
          'Testing of Node.js application',
          'WebAPI: REST & GraphQL',
          'DB: SQL, PostgreSQL',
          'Containerization, Docker',
          'Logging and Error Handling',
          'Authentication & authorization, JWT',
          'Nest.js',
        ]}
        marked
      />,
    ],
    image: nodejsImg,
  },
  angular: {
    title: 'Training Program',
    content: [
      <Paragraph>
        This course is designed for individuals with a solid foundation in JavaScript, TypeScript,
        and front-end development. Familiarity with RS School processes and RS Stage #2 certification is a plus.
      </Paragraph>,
      <Paragraph>
        The course lasts 11 weeks, requiring approximately 20-40 hours of study per week.
      </Paragraph>,
      // todo use custom link
      <Paragraph>
        All webinars are recorded and available on our
        {' '}
        <Link className="link" to="https://www.youtube.com/c/rollingscopesschool" target="blank">
          Youtube
        </Link>
        . Theoretical materials are provided as recorded lectures from previous courses.
      </Paragraph>,
    ],
    image: angularImg,
  },

  'js / front-end en': {
    title: 'Training Program',
    content: [
      <Paragraph>
        The program consists of 3 stages. There may be requirements for advancing to each higher
        stage, which will be described below. This specific run of the program will take the form of
        self-study. This means that you will have access to pre-recorded webinars, recommended
        materials, and weekly live Q&A sessions with our mentors/coordinators to answer any
        questions you might have.
      </Paragraph>,
      <Paragraph>
        You will also have the ability to communicate with other students and help each other solve
        any problems you might face. We will provide you with a list of topics that should be
        covered for each stage with recommended deadlines, but you will have the freedom to choose
        when you want to watch the lectures and complete the tasks.
      </Paragraph>,
      <Paragraph>
        <span>BE AWARE</span>
        {' '}
        that practical tasks’ deadlines are not suggestions, and should be respected.
      </Paragraph>,
    ],
    image: jsImg,
  },

  'js / front-end ru': {
    title: 'Программа обучения',
    content: [
      <Paragraph>
        Программа состоит из 3 этапов. На каждом последующем этапе могут быть установлены требования
        для перехода на следующий уровень, которые будут описаны ниже. В данном запуске программы
        будет предусмотрено самостоятельное обучение. Это означает, что у вас будет доступ к
        предзаписанным вебинарам, рекомендуемым материалам и еженедельным онлайн сессиям вопросов и
        ответов с нашими наставниками/координаторами для ответа на любые вопросы, которые у вас
        могут возникнуть.
      </Paragraph>,
      <Paragraph>
        У вас также будет возможность общаться с другими студентами и помогать друг другу решать
        любые проблемы, с которыми вы можете столкнуться. Мы предоставим вам список тем, которые
        должны быть рассмотрены на каждом этапе с рекомендуемыми сроками, но у вас будет свобода
        выбора времени для просмотра лекций и выполнения заданий.
      </Paragraph>,
      <Paragraph>
        {`${(<span>ОБРАТИТЕ ВНИМАНИЕ</span>)}, что сроки выполнения практических заданий не являются рекомендацией и должны быть соблюдены.`}
      </Paragraph>,
    ],
    image: jsImg,
  },

  'js / front-end pre-school ru': {
    title: 'Программа обучения',
    content: [
      <Paragraph>
        <span>Введение в RS School:</span>
        <br />
        Знакомство со школой, профессией JS/Front-end разработчика и системой контроля версий Git.
      </Paragraph>,
      <Paragraph>
        <span>Основы веб-разработки:</span>
        <br />
        HTML и CSS: Основы, позиционирование с Flexbox и адаптивные макеты.
        <br />
        JavaScript: Основы, функции, объекты, массивы и работа с DOM.
        <br />
        Инструменты: Chrome Dev Tools, VS Code, Терминал и Figma.
      </Paragraph>,
      <Paragraph>
        <span>
          Проектное обучение:
          <br />
        </span>
        Проект CV: Markdown, HTML, CSS и Git.
        <br />
        Проект Library: Фиксированная и адаптивная вёрстка, добавление функционала.
        <br />
        CSS Mem Slider: Продвинутый проект по CSS.
        <br />
        Проекты JS-30: Аудиоплеер, галерея изображений и случайная игра.
        <br />
      </Paragraph>,
      <Paragraph>
        <span>Задачи Codewars:</span>
        <br />
        Еженедельные задачи по алгоритмам и структурам данных.
      </Paragraph>,
      <Paragraph>
        <span>Итоговая аттестация:</span>
        <br />
        Кросс-чек проектов, тесты и ревью кода. Выдача сертификата.
      </Paragraph>,
    ],
    image: jsImg,
  },
  react: {
    title: 'Target audience',
    content: [
      <Paragraph>
        RS School students who have completed RS School Stage #2 and new students with strong
        CoreJS/TS/Frontend skills:
      </Paragraph>,
      <Actions
        actions={[
          'JavaScript',
          'TypeScript',
          'Git, GitHub (clone, add, commit, push, pull, merge, rebase, working with Pull Request)',
          'NPM, Webpack',
          'CSS3 / HTML5',
          'Chrome DevTools, Figma',
          'Understanding of the REST',
        ]}
        marked
      />,
      <Subtitle text="Attention! Mentors on this course will be first assigned to the graduates of the RS School Stage #2." />,
    ],
    image: reactEnImg,
  },
  'react ru': {
    title: 'Для кого',
    content: [
      <Paragraph>
        Бесплатный курс от сообщества The Rolling Scopes для тех, кто хочет получить знания и опыт,
        достаточные для трудоустройства на позицию Junior Software Engineer в области
        JavaScript/Front-end.
      </Paragraph>,
    ],
    image: reactRuImg,
  },
  'aws fundamentals badge': {
    title: 'AWS DIGITAL BADGE',
    content: [
      <Paragraph>
        Upon completing the course and passing the AWS Cloud Quest: Cloud Practitioner, you will
        obtain an AWS digital badge. This badge will recognize your achievement and demonstrate your
        knowledge of AWS fundamentals to potential employers or clients. By the end of the course,
        you will have gained a solid foundation in AWS fundamentals and be prepared to pass the AWS
        Cloud Practitioner certification.
      </Paragraph>,
    ],
    image: awsPractitionerBadge,
  },
};
