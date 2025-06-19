import { JSX } from 'react';
import { StaticImageData } from 'next/image';

import { Course } from '@/entities/course';
import { ANCHORS, NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { communityMenuStaticLinks, donateOptions, schoolMenuStaticLinks } from 'data';

type StaticLinksType = {
  title: string;
  detailsUrl: string;
  description: string;
};

type DonateOptionType = {
  id: number;
  buttonLinkLabel: string;
  menuLinkLabel: string;
  buttonIcon: () => JSX.Element;
  menuIcon: StaticImageData;
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
    icon: option.menuIcon,
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

export const generateNavItemsConfig = (iconSrc: StaticImageData) => {
  return [
    {
      label: NAV_MENU_LABELS.RS_SCHOOL,
      url: ROUTES.HOME,
    },
    {
      label: NAV_MENU_LABELS.COURSES,
      url: ROUTES.COURSES,
    },
    {
      label: NAV_MENU_LABELS.COMMUNITY,
      url: ROUTES.COMMUNITY,
    },
    {
      label: NAV_MENU_LABELS.MENTORSHIP,
      url: ROUTES.MENTORSHIP,
    },
    {
      label: NAV_MENU_LABELS.DOCS,
      url: ROUTES.DOCS_EN,
    },
    {
      label: NAV_MENU_LABELS.SUPPORT_US,
      url: `#${ANCHORS.DONATE}`,
      icon: iconSrc,
    },
  ];
};
