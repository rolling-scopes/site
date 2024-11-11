import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { GenericItemProps } from '../school-list/school-list';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import type { Course } from '@/entities/course';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import { Color } from '@/widgets/school-menu/types.ts';
import { MentorshipCourse } from 'data';

import styles from './school-item.module.scss';

const cx = classNames.bind(styles);

interface SchoolItemProps {
  item: MentorshipCourse | Course | GenericItemProps;
  color: Color;
}

export const SchoolItem = ({ item, color }: SchoolItemProps) => {
  const courseDate = 'startDate' in item && getCourseDate(item.startDate, COURSE_STALE_AFTER_DAYS);
  const descriptionText = 'description' in item ? item.description : courseDate;
  const isIdExist = 'id' in item;
  const isIconSmallExist = 'iconSmall' in item;
  const isDescriptionExist = 'description' in item;

  const descriptionContent = (
    <>
      <span className={cx(color)}>{item.title}</span>
      <small>{descriptionText}</small>
    </>
  );

  const descriptionBlock = isDescriptionExist
    ? (
        descriptionContent
      )
    : (
        <div className={cx('details')}>{descriptionContent}</div>
      );

  return (
    <li key={isIdExist ? item.id : item.title}>
      <Link href={item.detailsUrl} className={cx('school-item', { 'with-icon': isIdExist })}>
        {isIconSmallExist && (
          <Image
            className={cx('icon-wrapper')}
            src={item.iconSmall}
            alt={item.title}
            width={32}
            height={32}
          />
        )}
        {descriptionBlock}
      </Link>
    </li>
  );
};
