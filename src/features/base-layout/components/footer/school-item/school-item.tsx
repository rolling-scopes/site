import { type Course } from '@/app/types';
import { type GenericItemProps } from '../school-list/school-list';
import { Link } from 'react-router-dom';
import './school-item.scss';

interface SchoolItemProps {
  item: Course | GenericItemProps;
  index: number;
}

export const SchoolItem = ({ item, index }: SchoolItemProps) => {
  return 'description' in item ? (
    <li key={item.title} className="school-item">
      <Link to={item.to} onClick={!index ? () => window.scrollTo({ top: 0 }) : undefined}>
        {item.title}
      </Link>
      <small>{item.description}</small>
    </li>
  ) : (
    <li key={item.id} className="school-item with-icon">
      <div className="icon-wrapper">
        <img src={item.iconSmall} alt={item.title} />
      </div>
      <div className="details">
        <Link to={item.detailsUrl}>{item.title}</Link>
        <small>
          {new Date(item.startDate) > new Date() ? `Start ${item.startDate}` : 'Upcoming'}
        </small>
      </div>
    </li>
  );
};
