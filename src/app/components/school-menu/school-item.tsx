import { type Course } from '@/app/types';
import { type GenericItemProps } from './school-list';
import { Link } from 'react-router-dom';

interface SchoolItemProps {
  item: Course | GenericItemProps;
  color: 'dark' | 'light';
}

export const SchoolItem = ({ item, color }: SchoolItemProps) => {
  const courseDate =
    'startDate' in item && new Date(item.startDate).getTime() > new Date().getTime() - 1209600000
      ? `Start ${item.startDate}`
      : 'TBD';
  const descriptionText = 'description' in item ? item.description : courseDate;

  const descriptionContent = (
    <>
      <span className={color}>{item.title}</span>
      <small>{descriptionText}</small>
    </>
  );

  const descriptionBlock =
    'description' in item ? (
      descriptionContent
    ) : (
      <div className="details">{descriptionContent}</div>
    );

  return (
    <li key={'id' in item ? item.id : item.title}>
      <Link
        to={item.detailsUrl}
        className={'id' in item ? 'school-item with-icon' : 'school-item'}
        onClick={'id' in item ? () => window.scrollTo({ top: 0 }) : undefined}>
        {'iconSmall' in item && (
          <img
            className="icon-wrapper"
            src={item.iconSmall}
            alt={item.title}
            width={32}
            height={32}
            loading="lazy"
          />
        )}
        {descriptionBlock}
      </Link>
    </li>
  );
};
