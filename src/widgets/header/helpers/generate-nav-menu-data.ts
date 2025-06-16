import { JSX } from 'react';
import { StaticImageData } from 'next/image';

import { Course } from '@/entities/course';
import { NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
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

type MenuItem = {
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
    rsSchoolOptions: mapStaticLinksToMenuItem(schoolMenuStaticLinks),
    coursesOptions: mapCoursesToMenuItems(courses, 'courses'),
    communityOptions: mapStaticLinksToMenuItem(communityMenuStaticLinks),
    mentorshipOptions: mapCoursesToMenuItems(mentorshipCourses, 'mentorship'),
    donateOptions: mapDonateOptions(donateOptions),
  };
};
