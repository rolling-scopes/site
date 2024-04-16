import { Course } from '@/app/types';
import { SchoolItem } from './school-item';

export interface GenericItemProps {
  title: string;
  detailsUrl: string;
  description: string;
}

interface SchoolListProps {
  list: Course[] | GenericItemProps[];
  color: 'dark' | 'light';
}

export const SchoolList = ({ list, color }: SchoolListProps) => (
  <ul className="school-list">
    {list?.map((item, index) => (
      <SchoolItem item={item} key={index} color={color} />
    ))}
  </ul>
);
