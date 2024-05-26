import { contentMap } from './about.data';
import { InfoGrid } from './components';
import { LinkCustom, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { type Course } from '@/app/types';
import { ArrowIcon } from '@/icons';

import './about.scss';

export type CourseNames =
  | 'js / front-end en'
  | 'js / front-end ru'
  | 'js / front-end pre-school ru'
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

const localizedContent = {
  en: {
    title: 'About the course',
    linkLabel: 'Become a student',
  },
  ru: {
    title: 'О курсе',
    linkLabel: 'Cтать студентом',
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
    <section className="course-about container">
      <div className="course-about content">
        <Title text={localizedContent[lang].title} />
        <InfoGrid items={infoList} hasTitle />
        <LinkCustom href={course.enroll} button={true} target="_blank">
          {localizedContent[lang].linkLabel} <ArrowIcon />
        </LinkCustom>
      </div>
    </section>
  );
};
