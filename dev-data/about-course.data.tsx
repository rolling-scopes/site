import awardIcon from '@/shared/assets/icons/award-icon.webp';
import giftIcon from '@/shared/assets/icons/gift.webp';
import noteIcon from '@/shared/assets/icons/note-icon.webp';
import paperIcon from '@/shared/assets/icons/paper-icon.webp';
import personIcon from '@/shared/assets/icons/person-icon.webp';
import planetIcon from '@/shared/assets/icons/planet.webp';
import {
  REGISTRATION_WILL_OPEN_SOON,
  REGISTRATION_WILL_OPEN_SOON_RU,
  ROUTES,
} from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import type { AboutCourseInfo } from 'data';
import { COURSE_TITLES, CourseNamesChannels, DISCORD_LINKS, communityGroups } from 'data';

type ContentMap = {
  [key in CourseNamesChannels]: AboutCourseInfo[];
};

const enIntro = {
  title: 'About the course',
  linkLabel: 'Become a student',
  noLinkLabel: REGISTRATION_WILL_OPEN_SOON,
  paragraph: null,
};
const ruIntro = {
  title: 'О курсе',
  linkLabel: 'Cтать студентом',
  noLinkLabel: REGISTRATION_WILL_OPEN_SOON_RU,
  paragraph: null,
};
const preSchoolIntro = {
  title: 'JS/Frontend-разработка. Подготовительный этап',
  linkLabel: 'Стать студентом',
  noLinkLabel: REGISTRATION_WILL_OPEN_SOON_RU,
  paragraph:
    'Подготовительный этап поможет тем, кто мало знаком или совсем не знаком с программированием и хотел бы впоследствии учиться на основном курсе «JavaScript/Front-end».',
};

const youtubeHref = communityGroups.find((sosial) => sosial.title === 'YouTube EN')?.href;
const infoMaterialsEn = (
  <Paragraph>
    All materials are publicly available on the
    {' '}
    {youtubeHref && (
      <>
        <LinkCustom
          href={youtubeHref}
          external
        >
          YouTube
        </LinkCustom>
        {' '}
        channel and
        {' '}
      </>
    )}
    <LinkCustom href="https://github.com/rolling-scopes-school/" external>
      GitHub
    </LinkCustom>
    .
  </Paragraph>
);

export const introLocalizedContent = {
  [COURSE_TITLES.JS_PRESCHOOL_RU]: preSchoolIntro,
  [COURSE_TITLES.JS_EN]: enIntro,
  [COURSE_TITLES.JS_RU]: ruIntro,
  [COURSE_TITLES.REACT]: enIntro,
  [COURSE_TITLES.ANGULAR]: enIntro,
  [COURSE_TITLES.NODE]: enIntro,
  [COURSE_TITLES.AWS_FUNDAMENTALS]: enIntro,
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: enIntro,
  [COURSE_TITLES.AWS_DEVOPS]: enIntro,
};

const listData = {
  javaScriptEN: [
    [
      {
        id: 1,
        text: 'The Mentors and trainers of our school are front-end and javascript developers from different companies/countries. ',
        title: 'How to become a mentor?',
        link: `/${ROUTES.MENTORSHIP}/${ROUTES.JS}`,
      },
    ],
  ],
  javaScriptRU: [
    [
      {
        id: 1,
        text: 'Наставники и тренеры нашей школы - это фронтенд и разработчики JavaScript из разных компаний и стран. ',
        title: 'Как стать наставником?',
        link: `/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`,
      },
    ],
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
    info: infoMaterialsEn,
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

const awsCloudDeveloper: AboutCourseInfo[] = angularNodejsAwsFundamentals('aws cloud dev').map(
  (item) => {
    if (item.id === 3) {
      return {
        ...item,
        info: 'Duration: 10 weeks.',
      };
    }
    return item;
  },
);

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
      info: <List data={listData.javaScriptEN} type="unmarked" size="compact" />,
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
      info: <List data={listData.javaScriptRU} type="unmarked" size="compact" />,
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
      info: 'Длительность обучения: 10 недель. Формат обучения: самообучение, групповое обучение, общение в Discord, задания проверяют в процессе кросс-чек и автоматически.',
      icon: noteIcon,
    },
    {
      id: 3,
      title: 'Бесплатное образование',
      info: 'В RS School работает принцип "Pay it forward". Мы бесплатно делимся с учащимися своими знаниями сейчас, надеясь, что в будущем они вернутся к нам в качестве менторов и точно так же передадут свои знания следующему поколению студентов.',
      icon: giftIcon,
    },
  ];
};

const reactEn: AboutCourseInfo[] = javaScriptEN().map((item) => {
  if (item.id === 2) {
    return {
      ...item,
      title: 'Materials',
      info: infoMaterialsEn,
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

const awsDevops: AboutCourseInfo[] = [
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
