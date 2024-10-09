import classNames from 'classnames/bind';
import { AboutCourseGrid } from '../about-course-grid/about-course-grid';
import type { Course } from '@/entities/course';
import { useCourseByTitle } from '@/shared/hooks/use-course-by-title';
import type { CourseName } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { contentMapAbout, introLocalizedContent } from 'data';

import styles from './about-course.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseProps = {
  courseName: CourseName;
  type?: 'ru' | 'en' | 'Pre-school RU';
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
        <WidgetTitle>{introLocalizedContent[type].title}</WidgetTitle>
        {introLocalizedContent[type].paragraph && (
          <Paragraph>{introLocalizedContent[type].paragraph}</Paragraph>
        )}
        <AboutCourseGrid items={courseInfoList} />
        <LinkCustom href={course.enroll} variant="primary" external>
          {introLocalizedContent[type].linkLabel}
        </LinkCustom>
      </div>
    </section>
  );
};
