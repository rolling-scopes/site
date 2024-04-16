import { SchoolList } from './school-list';
import { useDataByName } from '@/app/hooks';
import { type Course } from '@/app/types';

import './school-menu.scss';

const schoolMenuStaticLinks = [
  {
    title: 'About RS School',
    to: '/courses',
    description: 'Free online education',
  },
  {
    title: 'Upcoming courses',
    to: '/courses#upcoming-courses',
    description: 'Schedule your study',
  },
  {
    title: 'IT Journey',
    to: '/courses#learning-path',
    description: 'Plan your developer path',
  },
  {
    title: 'Mentoring',
    to: '/courses#mentors-wanted',
    description: 'Contribute and study',
  },
];

interface SchoolMenuProps {
  heading: 'rs school' | 'all courses';
  color?: 'dark' | 'light';
}

export const SchoolMenu = ({ heading, color = 'light' }: SchoolMenuProps) => {
  const { data } = useDataByName('courses');

  const courses = data as Course[];

  const schoolListProps = heading.includes('courses') ? courses : schoolMenuStaticLinks;

  return (
    <div className="school-menu">
      <h3 className={`heading ${color}`}>{heading}</h3>
      <SchoolList list={schoolListProps} color={color} />
    </div>
  );
};
