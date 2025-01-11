// TODO separate data and markup
import { JSX } from 'react';
import { StaticImageData } from 'next/image';
import {
  AWS_FUNDAMENTALS_BADGE,
  AwsFundamentalsBadge,
  COURSE_TITLES,
  CourseNamesKeys,
} from './courseTitles.data';
import awsPractitionerBadge from '@/shared/assets/aws-cloud-pract-badge.webp';
import angularImg from '@/shared/assets/rs-slope-angular.webp';
import awsDevImg from '@/shared/assets/rs-slope-aws-dev.webp';
import awsFundamentalsImg from '@/shared/assets/rs-slope-aws-fundamentals.webp';
import jsImg from '@/shared/assets/rs-slope-js.webp';
import nodejsImg from '@/shared/assets/rs-slope-nodejs.webp';
import reactEnImg from '@/shared/assets/rs-slope-react-en.webp';
import { REGISTRATION_WILL_OPEN_SOON, REGISTRATION_WILL_OPEN_SOON_RU } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';

interface CourseInfo {
  title: string;
  content: JSX.Element[];
  image: StaticImageData;
}

type ContentMap = {
  [key in CourseNamesKeys | AwsFundamentalsBadge]: CourseInfo;
};

export const contentMap: ContentMap = {
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: {
    title: 'Training Program',
    content: [
      // TODO delete keys
      <Paragraph key="awsDev 01">
        This course is a step-by-step journey to become an AWS Certified Developer ‒ Associate
        through this course. You will gain practical experience working with various AWS services
        and technologies via over 10 hands-on tasks. During the course, you&apos;ll dive deep into
        AWS, from cloud computing basics to advanced integrations and deployment strategies, through
        nine carefully designed modules.
      </Paragraph>,
      <Paragraph key="awsDev 02">
        Be well-prepared to pass the &quot;AWS Certified Developer - Associate&quot; certification
        and confidently apply your skills in real-world projects by the end of the course.
      </Paragraph>,
      <Subtitle key="awsDev 03">Course highlights:</Subtitle>,
      <List
        key="awsDev 04"
        data={[
          'Build a single-page application (SPA) using AWS S3 and CloudFront',
          'Develop serverless APIs with AWS API Gateway and Lambda',
          'Integrate with databases and S3',
          'Master asynchronous microservices communication using SQS and SNS',
          'Explore authorization with Lambda Authorizers and Cognito',
          'Learn containerization with Docker and Elastic Beanstalk',
          'Implement backend-for-frontend using API Gateway',
        ]}
      />,
    ],
    image: awsDevImg,
  },
  [COURSE_TITLES.AWS_FUNDAMENTALS]: {
    title: 'Training Program',
    content: [
      <Paragraph key="aws fundamentals 01">
        The AWS Certified Cloud Practitioner certification is a great entry-level certification for
        AWS. It&apos;s great at assessing how well you understand AWS, its services, and its
        ecosystem.
      </Paragraph>,
      <Paragraph key="aws fundamentals 02">
        The course consists of weekly assignments that you can complete at your own pace, followed
        by a test that will help you evaluate your understanding of the materials. We expect that
        you will need to dedicate 5‒10 hours per week to complete the assignments. The total
        duration of the course is 5 weeks.
      </Paragraph>,
      <Paragraph key="aws fundamentals 03">
        During the course, you will have access to online sessions led by AWS User Groups and RS
        School Mentors, where you can ask questions, discuss the materials, and get feedback.
      </Paragraph>,
    ],
    image: awsFundamentalsImg,
  },
  [COURSE_TITLES.NODE]: {
    title: 'Course Topics',
    content: [
      <Paragraph key="node.js 01">
        This course is designed for JavaScript / Front-End developers who want to get acquainted
        with Node.js and the server side of web application development.
      </Paragraph>,
      <Paragraph key="node.js 02">
        The course consists of weekly assignments that you can complete at your own pace, followed
        by a test that will help you evaluate your understanding of the materials
      </Paragraph>,
      <List
        key="node.js 03"
        data={[
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
      />,
    ],
    image: nodejsImg,
  },
  [COURSE_TITLES.ANGULAR]: {
    title: 'Training Program',
    content: [
      <Paragraph key="angular 01">
        This course is designed for individuals with a solid foundation in JavaScript, TypeScript,
        and front-end development. Familiarity with RS School processes and RS Stage #2
        certification is a plus.
      </Paragraph>,
      <Paragraph key="angular 02">
        The course lasts 11 weeks, requiring approximately 20-40 hours of study per week.
      </Paragraph>,

      <Paragraph key="angular 03">
        {`All webinars are recorded and available on our `}
        <LinkCustom href="https://www.youtube.com/c/rollingscopesschool" external>
          Youtube
        </LinkCustom>
        . Theoretical materials are provided as recorded lectures from previous courses.
      </Paragraph>,
    ],
    image: angularImg,
  },
  [COURSE_TITLES.JS_EN]: {
    title: 'Training Program',
    content: [
      <Paragraph key="js / front-end en 01">
        The program consists of 3 stages. There may be requirements for advancing to each higher
        stage, which will be described below. This specific run of the program will take the form of
        self-study. This means that you will have access to pre-recorded webinars, recommended
        materials, and weekly live Q&A sessions with our mentors/coordinators to answer any
        questions you might have.
      </Paragraph>,
      <Paragraph key="js / front-end en 02">
        You will also have the ability to communicate with other students and help each other solve
        any problems you might face. We will provide you with a list of topics that should be
        covered for each stage with recommended deadlines, but you will have the freedom to choose
        when you want to watch the lectures and complete the tasks.
      </Paragraph>,
      <Paragraph key="js / front-end en 03">
        <span>BE AWARE</span>
        {` that practical tasks’ deadlines are not suggestions, and should be
        respected.`}
      </Paragraph>,
    ],
    image: jsImg,
  },
  [COURSE_TITLES.JS_RU]: {
    title: 'Программа обучения',
    content: [
      <Paragraph key="js / front-end ru 01">
        Программа состоит из 3 этапов. На каждом последующем этапе могут быть установлены требования
        для перехода на следующий уровень, которые будут описаны ниже. В данном запуске программы
        будет предусмотрено самостоятельное обучение. Это означает, что у вас будет доступ к
        предзаписанным вебинарам, рекомендуемым материалам и еженедельным онлайн сессиям вопросов и
        ответов с нашими наставниками/координаторами для ответа на любые вопросы, которые у вас
        могут возникнуть.
      </Paragraph>,
      <Paragraph key="js / front-end ru 02">
        У вас также будет возможность общаться с другими студентами и помогать друг другу решать
        любые проблемы, с которыми вы можете столкнуться. Мы предоставим вам список тем, которые
        должны быть рассмотрены на каждом этапе с рекомендуемыми сроками, но у вас будет свобода
        выбора времени для просмотра лекций и выполнения заданий.
      </Paragraph>,
      <Paragraph key="js / front-end ru 03">
        <span>ОБРАТИТЕ ВНИМАНИЕ</span>
        {`, что сроки выполнения практических заданий не являются
        рекомендацией и должны быть соблюдены.`}
      </Paragraph>,
    ],
    image: jsImg,
  },
  [COURSE_TITLES.JS_PRESCHOOL_RU]: {
    title: 'Программа обучения',
    content: [
      <div key="js / front-end pre-school ru 01">
        <Paragraph>Введение в RS School:</Paragraph>
        <List
          data={[
            'Знакомство со школой, профессией JS/Front-end разработчика и системой контроля версий Git.',
          ]}
          type="unmarked"
        />
      </div>,
      <div key="js / front-end pre-school ru 02">
        <Paragraph>Основы веб-разработки:</Paragraph>
        <List
          data={[
            'HTML и CSS: Основы, позиционирование с Flexbox и адаптивные макеты.',
            'JavaScript: Основы, функции, объекты, массивы и работа с DOM.',
            'Инструменты: Chrome Dev Tools, VS Code, Терминал и Figma.',
          ]}
          type="unmarked"
        />
      </div>,
      <div key="js / front-end pre-school ru 03">
        <Paragraph>Проектное обучение:</Paragraph>
        <List
          data={[
            'Проект CV: Markdown, HTML, CSS и Git.',
            'Проект Library: Фиксированная и адаптивная вёрстка, добавление функционала.',
            'CSS Mem Slider: Продвинутый проект по CSS.',
            'Проекты JS-30: Аудиоплеер, галерея изображений и случайная игра.',
          ]}
          type="unmarked"
        />
      </div>,
      <div key="js / front-end pre-school ru 04">
        <Paragraph>Задачи Codewars:</Paragraph>
        <List data={['Еженедельные задачи по алгоритмам и структурам данных.']} type="unmarked" />
      </div>,
      <div key="js / front-end pre-school ru 05">
        <Paragraph>Итоговая аттестация:</Paragraph>
        <List
          data={['Кросс-чек проектов, тесты и ревью кода. Выдача сертификата.']}
          type="unmarked"
        />
      </div>,
    ],
    image: jsImg,
  },
  [COURSE_TITLES.REACT]: {
    title: 'Target audience',
    content: [
      <Paragraph key="react 01">
        We are looking for students with strong CoreJS/TS/Frontend skills.
      </Paragraph>,
      <Subtitle key="react 02">Requirements:</Subtitle>,
      <List
        key="react 03"
        data={[
          'Proficiency in JavaScript / TypeScript',
          'Familiarity with Git and GitHub operations (clone, add, commit, push, pull, merge, rebase, working with Pull Requests)',
          'Experience with NPM and bundling tools such as Webpack or Rollup',
          'Strong skills in CSS3 and HTML5',
          'Proficient use of Chrome DevTools',
          'Understanding of RESTful services',
        ]}
      />,
    ],
    image: reactEnImg,
  },
  [AWS_FUNDAMENTALS_BADGE]: {
    title: 'AWS DIGITAL BADGE',
    content: [
      <Paragraph key="aws fundamentals badge 01">
        Upon completing the course and passing the AWS Cloud Quest: Cloud Practitioner, you will
        obtain an AWS digital badge. This badge will recognize your achievement and demonstrate your
        knowledge of AWS fundamentals to potential employers or clients. By the end of the course,
        you will have gained a solid foundation in AWS fundamentals and be prepared to pass the AWS
        Cloud Practitioner certification.
      </Paragraph>,
    ],
    image: awsPractitionerBadge,
  },
  [COURSE_TITLES.AWS_DEVOPS]: {
    title: 'Details',
    content: [
      <Paragraph key="aws devops 01">
        If you are looking for an entry point to kickstart your IT career as a DevOps engineer, then
        this AWS course challenge is what you need.
      </Paragraph>,
      <Subtitle key="aws devops 02">
        Showcase your level of expertise and join this expert-led program to:
      </Subtitle>,
      <List
        key="aws devops 03"
        data={[
          'Discover how to develop and manage cloud infrastructure using the Infrastructure as Code (IaC) approach',
          'Learn how to install and configure a Kubernetes cluster, describe Kubernetes components and their purpose',
          'Explore CI/CD techniques to deploy containerized applications to the Kubernetes cluster',
          'Develop a monitoring solution',
          'Investigate how to troubleshoot distributed containerized application configurations',
          'Explore DevOps specialist vocabulary',
          'Become a DevOps engineer who is ready to face engineering challenges',
        ]}
      />,
      <Subtitle key="aws devops 04">What do we offer?</Subtitle>,
      <List
        key="aws devops 05"
        data={[
          'Support: you will get regular feedback and guidance on practical tasks, helping refine your skills to the next level',
          'Flexibility: depending on your weekly engagement, the recommendation is 3-4 hours daily',
          'Community-based education: the community will help you explore emerging technologies and best practices, ensuring you are equipped with the knowledge that the current market seeks',
        ]}
      />,
    ],
    image: awsDevImg,
  },
};

export const trainingProgramLink = {
  en: {
    linkLabel: 'Register',
    noLinkLabel: REGISTRATION_WILL_OPEN_SOON,
  },
  ru: {
    linkLabel: 'Зарегистрироваться',
    noLinkLabel: REGISTRATION_WILL_OPEN_SOON_RU,
  },
};
