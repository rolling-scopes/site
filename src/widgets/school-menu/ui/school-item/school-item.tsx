import { Link } from 'react-router-dom';
import { GenericItemProps } from '../school-list/school-list';
import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import { type Course } from '@/app/types';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import Image from '@/shared/ui/image';

interface SchoolItemProps {
  item: Course | GenericItemProps;
  color: 'dark' | 'light';
}

export const SchoolItem = ({ item, color }: SchoolItemProps) => {
  const courseDate = 'startDate' in item && getCourseDate(item.startDate, COURSE_STALE_AFTER_DAYS);
  const descriptionText = 'description' in item ? item.description : courseDate;

  const descriptionContent = (
    <>
      <span className={color}>{item.title}</span>
      <small>{descriptionText}</small>
    </>
  );

  const descriptionBlock = ('description' in item)
    ? (descriptionContent)
    : (<div className="details">{descriptionContent}</div>);

  return (
    <li key={'id' in item ? item.id : item.title}>
      <Link to={item.detailsUrl} className={'id' in item ? 'school-item with-icon' : 'school-item'}>
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
