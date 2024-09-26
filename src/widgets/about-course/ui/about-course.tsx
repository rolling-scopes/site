/* eslint-disable @stylistic/jsx-one-expression-per-line */
import classNames from 'classnames/bind';
import { InfoGrid } from './about-course-grid/about-course-grid';
import type { Course } from '@/entities/course';
import { useCourseByTitle } from '@/shared/hooks/use-course-by-title';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { contentMapAbout } from 'data';

import styles from './about-course.module.scss';

export const cx = classNames.bind(styles);

export type CourseNames =
  | 'js / front-end en'
  | 'js / front-end ru'
  | 'js / front-end pre-school ru'
  | 'react'
  | 'react ru'
  | 'angular'
  | 'node.js'
  | 'aws fundamentals'
  | 'aws cloud dev'
  | 'aws devops';

interface AboutProps {
  courseName: CourseNames;
  type?: 'ru' | 'en' | 'Pre-school RU';
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

export const AboutCourse = ({ courseName, type = 'en' }: AboutProps) => {
  const { course: data, error, loading, hasError } = useCourseByTitle(courseName);

  const course = data as Course;

  const infoList = contentMapAbout[courseName];

  if (loading) {
    return <p>Loading...</p>;
  }

  if ((error && hasError) || !course) {
    return <h3>Error: {error?.message || 'Course not found'}</h3>;
  }

  return (
    <section className={cx('course-about container')}>
      <div className={cx('course-about content')}>
        <WidgetTitle>{localizedContent[type].title}</WidgetTitle>
        {localizedContent[type].paragraph && (
          <Paragraph>{localizedContent[type].paragraph}</Paragraph>
        )}
        <InfoGrid items={infoList} hasTitle />
        <LinkCustom href={course.enroll} variant="primary" external>
          {localizedContent[type].linkLabel}
        </LinkCustom>
      </div>
    </section>
  );
};
