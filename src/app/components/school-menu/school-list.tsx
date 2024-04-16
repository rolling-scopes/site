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

export const SchoolList = ({ list, color }: SchoolListProps) => {
  const className =
    !!list && !!list[0] && 'description' in list[0]
      ? 'school-list'
      : 'school-list school-list_width';

  return (
    <ul className={className}>
      {list?.map((item) => (
        <SchoolItem item={item} key={item.title} color={color} />
      ))}
    </ul>
  );
};
