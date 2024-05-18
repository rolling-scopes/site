import { contentMap } from './about.data';
import { InfoGrid } from './components';
import { Button, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { type Course } from '@/app/types';

import './about.scss';

export type CourseNames =
  | 'js / front-end en'
  | 'js / front-end ru'
  | 'js / front-end pre-school'
  | 'react'
  | 'react ru'
  | 'angular'
  | 'node.js'
  | 'aws fundamentals'
  | 'aws cloud dev';

interface AboutProps {
  courseName: CourseNames;
}

export const About = ({ courseName }: AboutProps) => {
  const { course: data, error, loading, hasError } = useCourseByTitle(courseName);

  const course = data as Course;
  let language = 'en';

  if (course && course.language) {
    language = course.language[0];
  }
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
        <Title text={language === 'ru' ? 'О курсе' : 'About the course'} />
        <InfoGrid items={infoList} hasTitle />
        <Button
          label={language === 'ru' ? 'Cтать студентом' : 'Become a student'}
          href={course.enroll}
        />
      </div>
    </section>
  );
};
