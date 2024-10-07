import { InfoGrid } from './info-grid/info-grid';
import type { Course } from '@/entities/course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseName, contentMapAbout } from 'data';

import './about.scss';

// export type CourseNames =
//   | 'js / front-end en'
//   | 'js / front-end ru'
//   | 'js / front-end pre-school ru'
//   | 'react'
//   | 'react ru'
//   | 'angular'
//   | 'node.js'
//   | 'aws fundamentals'
//   | 'aws cloud dev'
//   | 'aws devops';

interface AboutProps {
  courseName: CourseName;
  type?: 'ru' | 'en' | 'Pre-school RU';
  course: Course;
}

const localizedContent = {
  en: {
    title: 'About the course',
    linkLabel: 'Become a student',
    paragraph: '',
  },
  ru: {
    title: 'О курсе',
    linkLabel: 'Cтать студентом',
    paragraph: '',
  },
  'Pre-school RU': {
    title: 'JS/Frontend-разработка. Подготовительный этап',
    linkLabel: 'Стать студентом',
    paragraph:
      'Подготовительный этап поможет тем, кто мало знаком или совсем не знаком с программированием и хотел бы впоследствии учиться на основном курсе «JavaScript/Front-end».',
  },
};

export const About = ({ courseName, type = 'en', course }: AboutProps) => {
  // const { course: data, error, loading, hasError } = useCourseByTitle(courseName);

  // const course = data as Course;

  const infoList = contentMapAbout[courseName];

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if ((error && hasError) || !course) {
  //   return <h3>Error: {error?.message || 'Course not found'}</h3>;
  // }

  return (
    <section className="course-about container">
      <div className="course-about content">
        <WidgetTitle>{localizedContent[type].title}</WidgetTitle>
        {localizedContent[type].paragraph && (
          <Paragraph>{localizedContent[type].paragraph}</Paragraph>
        )}
        <InfoGrid items={infoList} hasTitle />
        <LinkCustom href={course?.enroll} variant="primary" external>
          {localizedContent[type].linkLabel}
        </LinkCustom>
      </div>
    </section>
  );
};
