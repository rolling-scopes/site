import classNames from 'classnames/bind';
import { SchoolList } from '../school-list/school-list';
import { getMenuItems } from '@/widgets/school-menu/helpers/get-menu-item';
import { MentorshipDefaultRouteKeys, courses, mentorshipCourses } from 'data';

import styles from './school-menu.module.scss';

const cx = classNames.bind(styles);

export type SchoolMenuProps = {
  heading: 'rs school' | 'all courses' | 'community' | MentorshipDefaultRouteKeys;
  hasTitle?: boolean;
  color?: 'dark' | 'light';
};

export const SchoolMenu = ({ heading, hasTitle = true, color = 'light' }: SchoolMenuProps) => {
  const menuItems = getMenuItems(heading, courses, mentorshipCourses);

  return (
    <div className={cx('school-menu')}>
      {hasTitle && <h3 className={cx('heading', { color })}>{heading}</h3>}
      <SchoolList list={menuItems} color={color} />
    </div>
  );
};
