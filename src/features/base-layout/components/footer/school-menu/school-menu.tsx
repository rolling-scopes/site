import { useDataByName } from '@/app/hooks';
import { SchoolList } from '../school-list';
import './school-menu.scss';
import { Course } from '@/app/types';
const schoolMenuProps = [
  {
    title: 'About RS School',
    to: '/courses',
    description: 'Free online education'
  },
  {
    title: 'Upcoming courses',
    to: '/courses#upcoming-courses',
    description: 'Schedule your study'
  },
  {
    title: 'IT Journey',
    to: '/courses#learning-path',
    description: 'Plan your developer path'
  },
  {
    title: 'Mentoring',
    to: '/courses#mentors-wanted',
    description: 'Contribute and study'
  }
];
export const SchoolMenu = ({ heading }: { heading: 'rs school' | 'all courses' }) => {
  const { data: courseRaw } = useDataByName('courses');

  const courses = courseRaw as Course[];

  const schoolListProps = heading.includes('courses') ? courses : schoolMenuProps;

  return (
    <div className="school-menu">
      <h3 className="heading">{heading}</h3>
      <SchoolList list={schoolListProps} />
    </div>
  );
};
