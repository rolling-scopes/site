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
  lang?: 'ru' | 'en';
}

const LocalizedContent = {
  en: {
    title: 'About the course',
    buttonLabel: 'Become a student',
  },
  ru: {
    title: 'О курсе',
    buttonLabel: 'Cтать студентом',
  },
};
export const About = ({ courseName, lang = 'en' }: AboutProps) => {
  const { course: data, error, loading, hasError } = useCourseByTitle(courseName);

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
        <Title text={LocalizedContent[lang].title} />
        <InfoGrid items={infoList} hasTitle />
        <Button label={LocalizedContent[lang].buttonLabel} href={course.enroll} />
      </div>
    </section>
  );
};
