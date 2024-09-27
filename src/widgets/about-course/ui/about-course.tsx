import classNames from 'classnames/bind';
import { AboutCourseGrid } from './about-course-grid/about-course-grid';
import type { Course } from '@/entities/course';
import { useCourseByTitle } from '@/shared/hooks/use-course-by-title';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
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

interface AboutCourseProps {
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

export const AboutCourse = ({ courseName, type = 'en' }: AboutCourseProps) => {
  const { course: data, error, loading, hasError } = useCourseByTitle(courseName);

  const course = data as Course;

  const courseInfoList = contentMapAbout[courseName];

  if (loading) {
    return <Paragraph>Loading...</Paragraph>;
  }

  if ((error && hasError) || !course) {
    return (
      <Subtitle>
        Error:
        {error?.message || 'Course not found'}
      </Subtitle>
    );
  }

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{localizedContent[type].title}</WidgetTitle>
        {localizedContent[type].paragraph && (
          <Paragraph>{localizedContent[type].paragraph}</Paragraph>
        )}
        <AboutCourseGrid items={courseInfoList} />
        <LinkCustom href={course.enroll} variant="primary" external>
          {localizedContent[type].linkLabel}
        </LinkCustom>
      </div>
    </section>
  );
};
