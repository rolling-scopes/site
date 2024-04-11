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
    <li key={item.title}>
      <Link
        to={item.to}
        onClick={!index ? () => window.scrollTo({ top: 0 }) : undefined}
        className="school-item">
        <span className={color}>{item.title}</span>
        <small>{item.description}</small>
      </Link>
    </li>
  ) : (
    <li key={item.id} className="school-item">
      <Link to={item.detailsUrl} className="with-icon">
        <div className="icon-wrapper">
          <img src={item.iconSmall} alt={item.title} width={32} height={32} loading="lazy" />
        </div>
        <div className="details">
          <span className={color}>{item.title}</span>
          <small>
            {new Date(item.startDate) > new Date() ? `Start ${item.startDate}` : 'Upcoming'}
          </small>
        </div>
      </Link>
    </li>
  );
};
