import { contentMap } from './about.data';
import { InfoGrid } from './components';
import { Button, Paragraph, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { type Course } from '@/app/types';

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
  lang?: 'ru' | 'en' | 'pre_school';
}

const localizedContent = {
  en: {
    title: 'About the course',
    buttonLabel: 'Become a student',
  },
  ru: {
    title: 'О курсе',
    buttonLabel: 'Cтать студентом',
  },
  pre_school: {
    title: 'JS/Frontend-разработка. Подготовительный этап',
    buttonLabel: 'Стать студентом',
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

        {courseName === 'js / front-end pre-school ru' && (
          <Paragraph>
            Подготовительный этап поможет тем, кто мало знаком или совсем не знаком с
            программированием и хотел бы впоследствии учиться на основном курсе
            «JavaScript/Front-end».
          </Paragraph>
        )}
        <InfoGrid items={infoList} hasTitle />
        <Button label={localizedContent[lang].buttonLabel} href={course.enroll} />
      </div>
    </section>
  );
};
