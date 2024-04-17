import type { CourseNames } from './about';
import awardIcon from '@/assets/icons/award-icon.webp';
import chatIcon from '@/assets/icons/chat-icon.webp';
import giftIcon from '@/assets/icons/gift.webp';
import noteIcon from '@/assets/icons/note-icon.webp';
import paperIcon from '@/assets/icons/paper-icon.webp';
import personIcon from '@/assets/icons/person-icon.webp';
import planetIcon from '@/assets/icons/planet.webp';

type AboutInfo = {
  id: number;
  title: string;
  info: string;
  icon: string;
};

type ContentMap = {
  [key in CourseNames]: AboutInfo[];
};

type discordLinksType = {
  [key in CourseNames]: string;
};

const discordLinks: discordLinksType = {
  javascript: 'https://discord.com/invite/QvEYg7EaQ4',
  'javascript-en': 'https://discord.com/invite/uW5cCHR',
  react: 'https://discord.com/invite/zyRcphs3px',
  'react ru': 'https://discord.com/invite/zyRcphs3px',
  angular: 'https://discord.com/invite/xwReXYqvs7',
  'node.js': 'https://discord.com/invite/8BFb8va',
  'aws fundamentals': 'https://discord.com/invite/WEZxwRa4J6',
  'aws cloud dev': 'https://discord.com/invite/WEZxwRa4J6',
};

const angularNodejsAwsFundamentals: (course: string) => AboutInfo[] = (course) => [
  {
    id: 1,
    title: 'For everyone',
    info: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.The RS School is working by the principle of "Pay it forward". Members of our community share their knowledge and check students\' tasks for free. And we hope that our students will continue this work as our mentors in the future.',
    icon: personIcon,
  },
  {
    id: 2,
    title: 'Materials',
    info: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.',
    icon: paperIcon,
  },
  {
    id: 3,
    title: 'Schedule',
    info: 'Twice a week in the evenings. Duration: 9 weeks. Types of training: webinars.',
    icon: noteIcon,
  },
  {
    id: 4,
    title: 'Certificate',
    info: 'After accomplishing all three stages of education, students will receive an electronic certificate of completion.',
    icon: awardIcon,
  },
  {
    id: 5,
    title: 'Chat',
    info: `Open <a href=${
      discordLinks[course as keyof discordLinksType]
    }>chat</a> for applicants and students on Discord.`,
    icon: chatIcon,
  },
];

const awsCloudDeveloper: AboutInfo[] = angularNodejsAwsFundamentals('aws cloud dev').map((item) => {
  if (item.id === 3) return { ...item, info: 'Duration: 10 weeks.' };
  return item;
});

const javaScript: (lang: string) => AboutInfo[] = (lang) => [
  {
    id: 1,
    title: 'For everyone',
    info: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.',
    icon: personIcon,
  },
  {
    id: 2,
    title: 'Worldwide mentors and trainers',
    info: 'The Mentors and trainers of our school are front-end and javascript developers from different companies/countries. How to become a <a href="/courses#mentors-wanted">mentor</a>?',
    icon: planetIcon,
  },
  {
    id: 3,
    title: 'Free education',
    info: 'Feel the desire to share your experience and knowledge',
    icon: giftIcon,
  },
  {
    id: 4,
    title: 'Certificate',
    info: 'A certificate of successful completion of the course is issued to everybody who pass two stages of training.',
    icon: awardIcon,
  },
  {
    id: 5,
    title: 'Chat',
    info: `Throughout the course, we mostly use <a href=${
      discordLinks[lang === 'en' ? 'javascript-en' : 'javascript']
    }>Discord chat</a>.`,
    icon: chatIcon,
  },
];

const reactEn: AboutInfo[] = javaScript('en').map((item) => {
  if (item.id === 2) {
    return {
      ...item,
      title: 'Materials',
      info: `<li>School <a href='https://docs.rs.school'>documentation</a></li><li>All materials are publicly available on the YouTube channel and GitHub</li>`,
      icon: paperIcon,
    };
  }
  if (item.id === 5) {
    return {
      ...item,
      info: `Throughout the course, we mostly use <a href=${discordLinks['react']}>Discord chat</a>.`,
    };
  }
  return item;
});

const reactRuAbout: AboutInfo[] = [
  {
    id: 1,
    title: 'Для всех желающих',
    info: 'Новый набор студентов стартует каждые полгода и насчитывает около 6000-7000 человек.В RS School может учиться каждый, независимо от возраста, профессиональной занятости и места жительства. Однако для обучения необходимо иметь базовые знания.',
    icon: personIcon,
  },
  {
    id: 2,
    title: 'Материалы',
    info: 'Документация школы - https://docs.rs.schoolВсе материалы находятся в открытом доступе на YouTube и GitHub.Также предлагаем ознакомиться с конспектом первого этапа обучения.',
    icon: paperIcon,
  },
  {
    id: 3,
    title: 'Сертификат',
    info: 'Сертификат об успешном прохождении курсов выдается всем прошедшим два этапа обучения.',
    icon: awardIcon,
  },
  {
    id: 4,
    title: 'Чат',
    info: `Открытый <a href=${discordLinks['react ru']}>chat</a> для абитуриентов и учащихся Discord.`,
    icon: chatIcon,
  },
  {
    id: 5,
    title: 'Менторы и Тренеры',
    info: 'В обучении участвуют 430 менторов. Наши менторы — это front-end и javascript разработчики из различных компаний и стран. Как стать ментором?',
    icon: planetIcon,
  },
];

export const contentMap: ContentMap = {
  javascript: javaScript('ru'),
  'javascript-en': javaScript('en'),
  react: reactEn,
  'react ru': reactRuAbout,
  angular: angularNodejsAwsFundamentals('angular'),
  'node.js': angularNodejsAwsFundamentals('node.js'),
  'aws fundamentals': angularNodejsAwsFundamentals('aws fundamentals'),
  'aws cloud dev': awsCloudDeveloper,
};
