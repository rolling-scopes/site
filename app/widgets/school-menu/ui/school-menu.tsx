import { GenericItemProps, SchoolList } from './school-list/school-list';
import { ANCHORS } from '@/app/const';
import type { Course } from '@/entities/course';
import { useDataByName } from '@/shared/hooks/use-data-by-name';

import './school-menu.scss';

const schoolMenuStaticLinks = [
  {
    title: 'About RS School',
    detailsUrl: `/#${ANCHORS.ABOUT_SCHOOL}`,
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
    detailsUrl: `/community/#${ANCHORS.ABOUT_COMMUNITY}`,
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

function getMenuItems(
  heading: SchoolMenuProps['heading'],
  courses: Course[],
): GenericItemProps[] | Course[] {
  switch (heading) {
    case 'all courses':
      return courses;
    case 'rs school':
      return schoolMenuStaticLinks;
    case 'community':
      return communityMenuStaticLinks;
    default:
      return [];
  }
}

export const SchoolMenu = ({ heading, hasTitle = true, color = 'light' }: SchoolMenuProps) => {
  const { data } = useDataByName('courses');
  const courses = data as Course[];
  const menuItems = getMenuItems(heading, courses);

  return (
    <div className="school-menu">
      {hasTitle && <h3 className={`heading ${color}`}>{heading}</h3>}
      <SchoolList list={menuItems} color={color} />
    </div>
  );
};
