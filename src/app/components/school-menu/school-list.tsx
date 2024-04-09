import { type Course } from '@/app/types';
import { SchoolItem } from './school-item';

export interface GenericItemProps {
  title: string;
  to: string;
  description: string;
}

interface SchoolListProps {
  list: (Course | GenericItemProps)[];
  color: 'dark' | 'light';
}

export const SchoolList = ({ list, color }: SchoolListProps) => {
  const className = (!!list && !!list[0] && 'description' in list[0]) 
    ? "school-list"
    : "school-list school-list_width";
  return (
    <ul className={className}>
      {list?.map((item, index) => (
        <SchoolItem item={item} index={index} key={index} color={color} />
      ))}
    </ul>
  )
};
