import classNames from 'classnames/bind';
import { SchoolItem } from '../school-item/school-item';
import type { Course } from '@/entities/course';
import { MentorshipCourse } from 'data';

import styles from './school-list.module.scss';

const cx = classNames.bind(styles);

export interface GenericItemProps {
  title: string;
  detailsUrl: string;
  description: string;
}

interface SchoolListProps {
  list: MentorshipCourse[] | Course[] | GenericItemProps[];
  color: 'dark' | 'light';
}

export const SchoolList = ({ list, color }: SchoolListProps) => {
  const isSchoolListFixed = !('description' in list[0]);

  return (
    <ul className={cx('school-list', { 'school-list-fixed': isSchoolListFixed })}>
      {list?.map((item) => <SchoolItem item={item} key={item.title} color={color} />)}
    </ul>
  );
};
