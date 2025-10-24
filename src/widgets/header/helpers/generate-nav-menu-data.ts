import { StaticImageData } from 'next/image';

import { Course } from '@/entities/course';
import { ANCHORS, NAV_MENU_LABELS, NAV_MENU_LABELS_RU, ROUTES } from '@/shared/constants';
import { ApiResourceLocale } from '@/shared/types';
import { communityMenuStaticLinks, donateOptions, schoolMenuStaticLinks } from 'data';

const TRANSLATION_MAP_LABELS = {
  [NAV_MENU_LABELS.RS_SCHOOL]: {
    'en-US': NAV_MENU_LABELS.RS_SCHOOL,
    'ru': NAV_MENU_LABELS_RU.RS_SCHOOL,
  },
  [NAV_MENU_LABELS.COURSES]: {
    'en-US': NAV_MENU_LABELS.COURSES,
    'ru': NAV_MENU_LABELS_RU.COURSES,
  },
  [NAV_MENU_LABELS.COMMUNITY]: {
    'en-US': NAV_MENU_LABELS.COMMUNITY,
    'ru': NAV_MENU_LABELS_RU.COMMUNITY,
  },
  [NAV_MENU_LABELS.MENTORSHIP]: {
    'en-US': NAV_MENU_LABELS.MENTORSHIP,
    'ru': NAV_MENU_LABELS_RU.MENTORSHIP,
  },
  [NAV_MENU_LABELS.DOCS]: {
    'en-US': NAV_MENU_LABELS.DOCS,
    'ru': NAV_MENU_LABELS_RU.DOCS,
  },
  [NAV_MENU_LABELS.SUPPORT_US]: {
    'en-US': NAV_MENU_LABELS.SUPPORT_US,
    'ru': NAV_MENU_LABELS_RU.SUPPORT_US,
  },
};

const COURSES_LINK_TRANSLATION_MAP = {
  'en-US': {
    title: 'All Courses',
    description: 'Journey to full stack mastery',
  },
  'ru': {
    title: 'Все курсы',
    description: 'Путь к мастерству во фуллстеке',
  },
};

const MENTORSHIP_LINK_TRANSLATION_MAP = {
  'en-US': {
    title: 'About Mentorship',
    description: 'By teaching others, you learn yourself',
  },
  'ru': {
    title: 'О менторстве',
    description: 'Обучая других — учишься сам',
  },
};

type StaticLinksType = {
  title: string;
  detailsUrl: string;
  description: string;
};

type DonateOptionType = {
  id: number;
  buttonLinkLabel: string;
  menuLinkLabel: string;
  icon: StaticImageData;
  href: string;
};

export type MenuItem = {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: StaticImageData | undefined;
};

const mapStaticLinksToMenuItem = (links: StaticLinksType[]): MenuItem[] => {
  return links.map((link, i) => ({
    id: i.toString(),
    title: link.title,
    icon: undefined,
    description: link.description,
    url: link.detailsUrl,
  }));
};

const mapCoursesToMenuItems = (courses: Course[], type: 'courses' | 'mentorship', lang: ApiResourceLocale = 'en-US'): MenuItem[] => {
  const coursesLink = {
    id: NAV_MENU_LABELS.COURSES,
    title: COURSES_LINK_TRANSLATION_MAP[lang].title,
    description: COURSES_LINK_TRANSLATION_MAP[lang].description,
    url: `/${ROUTES.COURSES}`,
    icon: undefined,
  };

  const mentorshipLink = {
    id: NAV_MENU_LABELS.MENTORSHIP,
    title: MENTORSHIP_LINK_TRANSLATION_MAP[lang].title,
    description: MENTORSHIP_LINK_TRANSLATION_MAP[lang].description,
    url: `/${ROUTES.MENTORSHIP}`,
    icon: undefined,
  };

  return [
    type === 'courses' ? coursesLink : mentorshipLink,
    ...courses.map((course) => ({
      id: course.id,
      title: course.title,
      icon: course.iconSmall,
      description: course.startDate,
      url: course.detailsUrl,
    })),
  ];
};

const mapDonateOptions = (options: DonateOptionType[]): MenuItem[] => {
  return options.toReversed().map((option) => ({
    id: option.id.toString(),
    title: option.menuLinkLabel,
    icon: option.icon,
    description: '',
    url: option.href,
  }));
};

export const generateNavMenuData = (
  courses: Course[],
  mentorshipCourses: Course[],
  lang: ApiResourceLocale = 'en-US',
): Record<string, MenuItem[]> => {
  return {
    [NAV_MENU_LABELS.RS_SCHOOL]: mapStaticLinksToMenuItem(schoolMenuStaticLinks[lang]),
    [NAV_MENU_LABELS.COURSES]: mapCoursesToMenuItems(courses, 'courses', lang),
    [NAV_MENU_LABELS.COMMUNITY]: mapStaticLinksToMenuItem(communityMenuStaticLinks[lang]),
    [NAV_MENU_LABELS.MENTORSHIP]: mapCoursesToMenuItems(mentorshipCourses, 'mentorship', lang),
    [NAV_MENU_LABELS.SUPPORT_US]: mapDonateOptions(donateOptions[lang]),
  };
};

export const generateNavItemsConfig = (iconSrc: StaticImageData, lang: ApiResourceLocale = 'en-US') => {
  return [
    {
      id: NAV_MENU_LABELS.RS_SCHOOL,
      label: TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.RS_SCHOOL][lang],
      url: ROUTES.HOME,
    },
    {
      id: NAV_MENU_LABELS.COURSES,
      label: TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.COURSES][lang],
      url: ROUTES.COURSES,
    },
    {
      id: NAV_MENU_LABELS.COMMUNITY,
      label: TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.COMMUNITY][lang],
      url: ROUTES.COMMUNITY,
    },
    {
      id: NAV_MENU_LABELS.MENTORSHIP,
      label: TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.MENTORSHIP][lang],
      url: ROUTES.MENTORSHIP,
    },
    {
      id: NAV_MENU_LABELS.DOCS,
      label: TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.DOCS][lang],
      url: ROUTES.DOCS,
    },
    {
      id: NAV_MENU_LABELS.SUPPORT_US,
      label: TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.SUPPORT_US][lang],
      url: `#${ANCHORS.DONATE}`,
      icon: iconSrc,
    },
  ];
};
