import { Button, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { InfoGrid } from './components';
import { contentMap } from './about.data';
import { type Course } from '@/app/types';
import './about.scss';

export type CourseNames =
  | 'aws cloud dev'
  | 'angular'
  | 'javascript'
  | 'aws fundamentals'
  | 'node.js'
  | 'react'
  | 'react ru';

interface AboutProps {
  courseName: CourseNames;
}

export const About = ({ courseName }: AboutProps) => {
  const { course: data } = useCourseByTitle(courseName);

  const course = data as Course;

  const infoList = contentMap[courseName];

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
