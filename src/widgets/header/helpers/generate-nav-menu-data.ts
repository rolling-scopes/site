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

const mapCoursesToMenuItems = (courses: Course[], type: 'courses' | 'mentorship'): MenuItem[] => {
  const coursesLink = {
    id: NAV_MENU_LABELS.COURSES,
    title: 'All Courses',
    description: 'Journey to full stack mastery',
    url: `/${ROUTES.COURSES}`,
    icon: undefined,
  };

  const mentorshipLink = {
    id: NAV_MENU_LABELS.MENTORSHIP,
    title: 'About Mentorship',
    description: 'By teaching others, you learn yourself',
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
): Record<string, MenuItem[]> => {
  return {
    [NAV_MENU_LABELS.RS_SCHOOL]: mapStaticLinksToMenuItem(schoolMenuStaticLinks),
    [NAV_MENU_LABELS.COURSES]: mapCoursesToMenuItems(courses, 'courses'),
    [NAV_MENU_LABELS.COMMUNITY]: mapStaticLinksToMenuItem(communityMenuStaticLinks),
    [NAV_MENU_LABELS.MENTORSHIP]: mapCoursesToMenuItems(mentorshipCourses, 'mentorship'),
    [NAV_MENU_LABELS.SUPPORT_US]: mapDonateOptions(donateOptions),
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
