import { type Course } from '@/app/types';
import { type GenericItemProps } from './school-list';
import { Link } from 'react-router-dom';

interface SchoolItemProps {
  item: Course | GenericItemProps;
  index: number;
  color: 'dark' | 'light';
}

export const SchoolItem = ({ item, index, color }: SchoolItemProps) => {
  return 'description' in item ? (
    <li key={item.title} className="school-item">
      <Link
        to={item.to}
        onClick={!index ? () => window.scrollTo({ top: 0 }) : undefined}
        className={color}>
        {item.title}
      </Link>
      <small>{item.description}</small>
    </li>
  ) : (
    <li key={item.id} className="school-item with-icon">
      <div className="icon-wrapper">
        <img src={item.iconSmall} alt={item.title} width={32} height={32} loading="lazy" />
      </div>
      <div className="details">
        <Link to={item.detailsUrl} className={color}>
          {item.title}
        </Link>
        <small>
          {new Date(item.startDate) > new Date() ? `Start ${item.startDate}` : 'Upcoming'}
        </small>
      </div>
    </li>
  );
};
