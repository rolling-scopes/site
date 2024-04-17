import { contentMap } from './about.data';
import { InfoGrid } from './components';
import { Button, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { type Course, CourseType } from '@/app/types';

import './about.scss';

export type CourseNames =
  | 'javascript'
  | 'javascript-en'
  | 'react'
  | 'react ru'
  | 'angular'
  | 'node.js'
  | 'aws fundamentals'
  | 'aws cloud dev';

interface AboutProps {
  courseName: CourseNames;
  type?: CourseType;
}

export const About = ({ courseName, type }: AboutProps) => {
  const { course: data, error, loading, hasError } = useCourseByTitle(courseName, type);

  const course = data as Course;

  const infoList = contentMap[courseName];

  if (loading) {
    return <p>Loading...</p>;
  }

  if ((error && hasError) || !course) {
    return <h3>Error: {error?.message || 'Course not found'}</h3>;
  }

  return (
    <section className="nodejs-about container">
      <div className="nodejs-about content">
        <Title text="About" />
        <InfoGrid items={infoList} hasTitle />
        <Button label="Become a student" href={course.enroll} />
      </div>
    </section>
  );
};
