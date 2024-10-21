import { ANCHORS } from '@/app/const';
import awardIcon from '@/shared/assets/icons/award-icon.webp';
import giftIcon from '@/shared/assets/icons/gift.webp';
import noteIcon from '@/shared/assets/icons/note-icon.webp';
import paperIcon from '@/shared/assets/icons/paper-icon.webp';
import personIcon from '@/shared/assets/icons/person-icon.webp';
import planetIcon from '@/shared/assets/icons/planet.webp';
import { List } from '@/shared/ui/list';
import type { AboutCourseInfo, CourseNamesChannels } from 'data';

type ContentMap = {
  [key in CourseNamesChannels]: AboutCourseInfo[];
};

export const introLocalizedContent = {
  en: {
    title: 'About the course',
    linkLabel: 'Become a student',
    paragraph: '',
  },
  ru: {
    title: 'О курсе',
    linkLabel: 'Cтать студентом',
    paragraph: '',
  },
  'pre-school-ru': {
    title: 'JS/Frontend-разработка. Подготовительный этап',
    linkLabel: 'Стать студентом',
    paragraph:
      'Подготовительный этап поможет тем, кто мало знаком или совсем не знаком с программированием и хотел бы впоследствии учиться на основном курсе «JavaScript/Front-end».',
  },
};

const listData = {
  javaScriptEN: [
    [{
      id: 1,
      text: 'The Mentors and trainers of our school are front-end and javascript developers from different companies/countries. ',
      title: 'How to become a mentor?',
      link: `/#${ANCHORS.MENTORS_WANTED}`,
    }],
  ],
  javaScriptRU: [
    [{
      id: 1,
      text: 'Наставники и тренеры нашей школы - это фронтенд и разработчики JavaScript из разных компаний и стран. ',
      title: 'Как стать наставником?',
      link: `/#${ANCHORS.MENTORS_WANTED}`,
    }],
  ],
  reactEn: [
    [{
      id: 1,
      text: 'School ',
      title: 'documentation',
      link: 'https://docs.rs.school',
    }],
    'All materials are publicly available on the YouTube channel and GitHub',
  ],
  reactRu: [
    [{
      id: 1,
      text: '',
      title: 'Документация школы',
      link: 'https://docs.rs.school',
    }],
    'Все материалы находятся в открытом доступе на YouTube и GitHub.Также предлагаем ознакомиться с конспектом первого этапа обучения.',
  ],
};

const angularNodejsAwsFundamentals: (course: string) => AboutCourseInfo[] = () => [
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

const awsCloudDeveloper: AboutCourseInfo[] = angularNodejsAwsFundamentals('aws cloud dev').map((item) => {
  if (item.id === 3) {
    return {
      ...item,
      info: 'Duration: 10 weeks.',
    };
  }
  return item;
});

const javaScriptEN: () => AboutCourseInfo[] = () => {
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
        <List data={listData.javaScriptEN} type="unmarked" size="compact" />
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
const javaScriptRU: () => AboutCourseInfo[] = () => {
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
      info: (
        <List data={listData.javaScriptRU} type="unmarked" size="compact" />
      ),
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

const javaScriptPreSchoolRU: () => AboutCourseInfo[] = () => {
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

const reactEn: AboutCourseInfo[] = javaScriptEN().map((item) => {
  if (item.id === 2) {
    return {
      ...item,
      title: 'Materials',
      info: (
        <List data={listData.reactEn} size="compact" />
      ),
      icon: paperIcon,
    };
  }
  return item;
});

const awsDevops: AboutCourseInfo[] = [
  ...reactEn,
  {
    id: 5,
    title: 'Duration',
    info: '12 weeks',
    icon: noteIcon,
  },
];

const reactRu: AboutCourseInfo[] = [
  {
    id: 1,
    title: 'Для всех желающих',
    info: 'Новый набор студентов стартует каждые полгода и насчитывает около 6000-7000 человек.В RS School может учиться каждый, независимо от возраста, профессиональной занятости и места жительства. Однако для обучения необходимо иметь базовые знания.',
    icon: personIcon,
  },
  {
    id: 2,
    title: 'Материалы',
    info: (
      <List data={listData.reactRu} size="compact" />
    ),
    icon: paperIcon,
  },
  {
    id: 3,
    title: 'Сертификат',
    info: 'При успешном прохождении курса выдается электронный сертификат.',
    icon: awardIcon,
  },
  {
    id: 4,
    title: 'Менторы и Тренеры',
    info: 'В обучении участвуют 430 менторов. Наши менторы — это front-end и javascript разработчики из различных компаний и стран. Как стать ментором?',
    icon: planetIcon,
  },
];

export const contentMapAbout: ContentMap = {
  'js / front-end ru': javaScriptRU(),
  'js / front-end en': javaScriptEN(),
  'js / front-end pre-school ru': javaScriptPreSchoolRU(),
  react: reactEn,
  'react ru': reactRu,
  angular: angularNodejsAwsFundamentals('angular'),
  'node.js': angularNodejsAwsFundamentals('node.js'),
  'aws fundamentals': angularNodejsAwsFundamentals('aws fundamentals'),
  'aws cloud dev': awsCloudDeveloper,
  'aws devops': awsDevops,
};
