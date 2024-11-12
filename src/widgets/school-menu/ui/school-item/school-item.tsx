import Image from 'next/image';
import Link from 'next/link';
import { GenericItemProps } from '../school-list/school-list';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import type { Course } from '@/entities/course';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import { DateStart } from '@/shared/ui/date-start';
import { MentorshipCourse } from 'data';

interface SchoolItemProps {
  item: MentorshipCourse | Course | GenericItemProps;
  color: 'dark' | 'light';
}

export const SchoolItem = ({ item, color }: SchoolItemProps) => {
  const courseDate = 'startDate' in item && getCourseDate(item.startDate, COURSE_STALE_AFTER_DAYS);
  const descriptionText = 'description' in item ? item.description : courseDate;

  const descriptionContent = (
    <>
      <span className={color}>{item.title}</span>
      {courseDate
        ? (
            <DateStart className="description" date={courseDate}></DateStart>
          )
        : (
            <small className="description">{descriptionText}</small>
          )}
    </>
  );

  const descriptionBlock =
    'description' in item
      ? (
          descriptionContent
        )
      : (
          <div className="details">{descriptionContent}</div>
        );

  return (
    <li key={'id' in item ? item.id : item.title}>
      <Link
        href={item.detailsUrl}
        className={'id' in item ? 'school-item with-icon' : 'school-item'}
      >
        {'iconSmall' in item && (
          <Image
            className="icon-wrapper"
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
