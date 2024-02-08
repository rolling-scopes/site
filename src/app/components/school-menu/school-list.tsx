import { type Course } from '@/app/types';
import { SchoolItem } from './school-item';

export interface GenericItemProps {
  title: string;
  to: string;
  description: string;
}

interface SchoolListProps {
  list: (Course | GenericItemProps)[];
}

export const SchoolList = ({ list }: SchoolListProps) => (
  <ul className="school-list">
    {list?.map((item, index) => (
      <SchoolItem item={item} index={index} key={index} />
    ))}
  </ul>
);
