import classNames from 'classnames/bind';
import { GenericItemProps, SchoolList } from '../school-list/school-list';
import { ANCHORS } from '@/core/const';
import type { Course } from '@/entities/course';
import { MentorshipCourse, MentorshipDefaultRouteKeys, courses, mentorshipCourses } from 'data';

import styles from './school-menu.module.scss';

const cx = classNames.bind(styles);

const schoolMenuStaticLinks = [
  {
    title: 'About RS School',
    detailsUrl: `/#${ANCHORS.ABOUT_SCHOOL}`,
    description: 'Free online education',
  },
  {
    title: 'Upcoming courses',
    detailsUrl: '/#upcoming-courses',
    description: 'Schedule your study',
  },
];

const communityMenuStaticLinks = [
  {
    title: 'About',
    detailsUrl: `/community/#${ANCHORS.ABOUT_COMMUNITY}`,
    description: 'Who we are',
  },
  {
    title: 'Events',
    detailsUrl: '/community/#events',
    description: 'Meet us at events',
  },
  {
    title: 'Merch',
    detailsUrl: '/community/#merch',
    description: 'Sloths for your daily life',
  },
  {
    title: 'Contribute',
    detailsUrl: '/community/#contribute',
    description: 'Assist us and improve yourself',
  },
];

interface SchoolMenuProps {
  heading: 'rs school' | 'all courses' | 'community' | MentorshipDefaultRouteKeys;
  hasTitle?: boolean;
  color?: 'dark' | 'light';
}

function getMenuItems(
  heading: SchoolMenuProps['heading'],
  courses: Course[],
  mentorshipCourses: MentorshipCourse[],
): GenericItemProps[] | Course[] | MentorshipCourse[] {
  switch (heading) {
    case 'all courses':
      return courses;
    case 'rs school':
      return schoolMenuStaticLinks;
    case 'community':
      return communityMenuStaticLinks;
    case 'mentorship':
      return mentorshipCourses;
    default:
      return [];
  }
}

export const SchoolMenu = ({ heading, hasTitle = true, color = 'light' }: SchoolMenuProps) => {
  const menuItems = getMenuItems(heading, courses, mentorshipCourses);

  return (
    <div className={cx('school-menu')}>
      {hasTitle && <h3 className={cx('heading', { color })}>{heading}</h3>}
      <SchoolList list={menuItems} color={color} />
    </div>
  );
};
