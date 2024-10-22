import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import { CourseNamesKeys } from './courseTitles.data';
import awardIcon from '@/shared/assets/icons/award-icon.webp';
import giftIcon from '@/shared/assets/icons/gift.webp';
import noteIcon from '@/shared/assets/icons/note-icon.webp';
import paperIcon from '@/shared/assets/icons/paper-icon.webp';
import personIcon from '@/shared/assets/icons/person-icon.webp';
import planetIcon from '@/shared/assets/icons/planet.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { COURSE_TITLES, DISCORD_LINKS } from 'data';

type AboutInfo = {
  id: number;
  title: string;
  info: string | ReactNode;
  icon: StaticImageData;
};

type ContentMap = {
  [key in CourseNamesKeys]: AboutInfo[];
};

const angularNodejsAwsFundamentals: (course: string) => AboutInfo[] = () => [
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
    info: 'After successful completion of the course, students will receive an electronic certificate.',
    icon: awardIcon,
  },
];

const awsCloudDeveloper: AboutInfo[] = angularNodejsAwsFundamentals('aws cloud dev').map((item) => {
  if (item.id === 3) {
    return {
      ...item,
      info: 'Duration: 10 weeks.',
    };
  }
  return item;
});

const javaScriptEN: () => AboutInfo[] = () => {
  return [
    {
      id: 1,
      title: 'For everyone',
      info: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.',
      icon: personIcon,
    },
    {
      id: 2,
      title: 'Worldwide mentors and trainers',
      info: (
        <p>
          The Mentors and trainers of our school are front-end and javascript developers from
          different companies/countries.
          {' '}
          <LinkCustom href="/#mentors-wanted">How to become a mentor?</LinkCustom>
        </p>
      ),
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
      info: 'After successful completion of the course, students will receive an electronic certificate.',
      icon: awardIcon,
    },
  ];
};
const javaScriptRU: () => AboutInfo[] = () => {
  return [
    {
      id: 1,
      title: 'Для всех',
      info: 'Каждый может учиться в RS School, независимо от возраста, профессиональной занятости или места жительства. Однако вам следует иметь достаточные базовые знания перед началом программы.',
      icon: personIcon,
    },
    {
      id: 2,
      title: 'Наставники и тренеры со всего мира',
      info: 'Наставники и тренеры нашей школы - это фронтенд и разработчики JavaScript из разных компаний и стран. Как стать наставником?',
      icon: planetIcon,
    },
    {
      id: 3,
      title: 'Бесплатное образование',
      info: 'Почувствуйте желание поделиться своим опытом и знаниями',
      icon: giftIcon,
    },
    {
      id: 4,
      title: 'Сертификат',
      info: 'Электронный сертификат об успешном окончании курса выдается всем, кто пройдет два этапа обучения.',
      icon: awardIcon,
    },
  ];
};

const javaScriptPreSchoolRU: () => AboutInfo[] = () => {
  return [
    {
      id: 1,
      title: 'Для всех',
      info: 'Каждый может учиться в RS School, независимо от возраста, профессиональной занятости или места жительства. Однако вам следует иметь достаточные базовые знания перед началом программы.',
      icon: personIcon,
    },
    {
      id: 2,
      title: 'Время обучения',
      info: 'Длительность обучения: 18 недель. Формат обучения: самообучение, групповое обучение, общение в Discord, задания проверяют в процессе кросс-чек и автоматически.',
      icon: noteIcon,
    },
    {
      id: 3,
      title: 'Бесплатное образование',
      info: 'В RS School работает принцип "Pay it forward". Мы бесплатно делимся с учащимися своими знаниями сейчас, надеясь, что в будущем они вернутся к нам в качестве менторов и точно так же передадут свои знания следующему поколению студентов.',
      icon: giftIcon,
    },
    {
      id: 4,
      title: 'Сертификат',
      info: 'При успешном прохождении курса выдается электронный сертификат.',
      icon: awardIcon,
    },
  ];
};

const reactEn: AboutInfo[] = javaScriptEN().map((item) => {
  if (item.id === 2) {
    return {
      ...item,
      title: 'Materials',
      info: (
        <ul>
          <li>
            School
            {' '}
            <LinkCustom href="https://docs.rs.school" external>
              documentation
            </LinkCustom>
          </li>
          <li>All materials are publicly available on the YouTube channel and GitHub</li>
        </ul>
      ),
      icon: paperIcon,
    };
  }
  if (item.id === 5) {
    return {
      ...item,
      info: (
        <p>
          Throughout the course, we mostly use
          {' '}
          <LinkCustom href={DISCORD_LINKS[COURSE_TITLES.REACT]} external>
            Discord chat
          </LinkCustom>
          .
        </p>
      ),
    };
  }
  return item;
});

const awsDevops: AboutInfo[] = [
  ...reactEn,
  {
    id: 5,
    title: 'Duration',
    info: '12 weeks',
    icon: noteIcon,
  },
];

export const contentMapAbout: ContentMap = {
  [COURSE_TITLES.JS_RU]: javaScriptRU(),
  [COURSE_TITLES.JS_EN]: javaScriptEN(),
  [COURSE_TITLES.JS_PRESCHOOL_RU]: javaScriptPreSchoolRU(),
  [COURSE_TITLES.REACT]: reactEn,
  [COURSE_TITLES.ANGULAR]: angularNodejsAwsFundamentals('angular'),
  [COURSE_TITLES.NODE]: angularNodejsAwsFundamentals('node.js'),
  [COURSE_TITLES.AWS_FUNDAMENTALS]: angularNodejsAwsFundamentals('aws fundamentals'),
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: awsCloudDeveloper,
  [COURSE_TITLES.AWS_DEVOPS]: awsDevops,
};
