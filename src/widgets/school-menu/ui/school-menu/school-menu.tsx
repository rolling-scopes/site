import classNames from 'classnames/bind';
import { getMenuItems } from '@/widgets/school-menu/helpers/get-menu-item';
import { Color } from '@/widgets/school-menu/types.ts';
import { SchoolItem } from '@/widgets/school-menu/ui/school-item/school-item';
import { MentorshipDefaultRouteKeys, courses, mentorshipCourses } from 'data';

import styles from './school-menu.module.scss';

const cx = classNames.bind(styles);

export type SchoolMenuProps = {
  heading: 'rs school' | 'all courses' | 'community' | MentorshipDefaultRouteKeys;
  hasTitle?: boolean;
  color?: Color;
};

export const SchoolMenu = ({ heading, hasTitle = true, color = 'light' }: SchoolMenuProps) => {
  const menuItems = getMenuItems(heading, courses, mentorshipCourses);
  const isSchoolListFixed = !('description' in menuItems[0]);

  return (
    <div className={cx('school-menu')}>
      {hasTitle && <h3 className={cx('heading', { color })}>{heading}</h3>}
      <ul className={cx('school-list', { 'school-list-fixed': isSchoolListFixed })}>
        {menuItems?.map((item) => <SchoolItem item={item} key={item.title} color={color} />)}
      </ul>
    </div>
  );
};
