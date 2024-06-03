import { SchoolList } from './school-list';
import { useDataByName } from '@/app/hooks';
import { type Course } from '@/app/types';

import './school-menu.scss';

const schoolMenuStaticLinks = [
  {
    title: 'About RS School',
    detailsUrl: '/#about',
    description: 'Free online education',
  },
  {
    title: 'Upcoming courses',
    detailsUrl: '/#upcoming-courses',
    description: 'Schedule your study',
  },
  {
    title: 'Mentoring',
    detailsUrl: '/#mentors-wanted',
    description: 'Contribute and study',
  },
];

const communityMenuStaticLinks = [
  {
    title: 'About',
    detailsUrl: '/community/#about',
    description: 'Who we are',
  },
  {
    title: 'Events',
    detailsUrl: '/community/#events',
    description: 'Meet us at events',
  },
  {
    title: 'Merch',
    detailsUrl: '/community/#merch',
    description: 'Sloths for your daily life',
  },
  {
    title: 'Contribute',
    detailsUrl: '/community/#contribute',
    description: 'Assist us and improve yourself',
  },
];

interface SchoolMenuProps {
  heading: 'rs school' | 'all courses' | 'community';
  hasTitle?: boolean;
  color?: 'dark' | 'light';
}

export const SchoolMenu = ({ heading, hasTitle = true, color = 'light' }: SchoolMenuProps) => {
  const { data } = useDataByName('courses');

  const courses = data as Course[];

  const schoolListProps = heading.includes('courses')
    ? courses
    : heading.includes('school')
      ? schoolMenuStaticLinks
      : communityMenuStaticLinks;

  return (
    <div className="school-menu">
      {hasTitle && <h3 className={`heading ${color}`}>{heading}</h3>}
      <SchoolList list={schoolListProps} color={color} />
    </div>
  );
};
