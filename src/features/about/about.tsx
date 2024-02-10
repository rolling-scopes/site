import { courseInfoFree, courseInfoSchedule } from './about.data';
import { Button, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { InfoGrid } from './components';
import { type Course } from '@/app/types';
import './about.scss';

export const About = ({ courseName }: { courseName: string }) => {
  const { course: data } = useCourseByTitle(courseName);

  const course = data as Course;

  const infoList =
    courseName === 'react' || courseName === 'javascript' ? courseInfoFree : courseInfoSchedule;

  return (
    <section className="nodejs-about container">
      <div className="nodejs-about content">
        <Title text="About" />
        <InfoGrid items={infoList} hasTitle />
        <Button label="Become a student" href={course?.detailsUrl || '#'} />
      </div>
    </section>
  );
};
