import { SchoolItem } from './school-item';
import { type Course } from '@/app/types';

export interface GenericItemProps {
  title: string;
  to: string;
  description: string;
}

interface SchoolListProps {
  list: (Course | GenericItemProps)[];
  color: 'dark' | 'light';
}

export const SchoolList = ({ list, color }: SchoolListProps) => (
  <ul className="school-list">
    {list?.map((item, index) => <SchoolItem item={item} index={index} key={index} color={color} />)}
  </ul>
);
