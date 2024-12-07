import classNames from 'classnames/bind';
import { AboutCourseGrid } from '../about-course-grid/about-course-grid';
import { Course } from '@/entities/course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, contentMapAbout, introLocalizedContent } from 'data';

import styles from './about-course.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseProps = {
  courseName: CourseNamesKeys;
  course: Course;
};

export const AboutCourse = ({ course, courseName }: AboutCourseProps) => {
  const courseInfoList = contentMapAbout[courseName];

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{introLocalizedContent[courseName].title}</WidgetTitle>
        {introLocalizedContent[courseName]?.paragraph && (
          <Paragraph>{introLocalizedContent[courseName].paragraph}</Paragraph>
        )}
        <AboutCourseGrid items={courseInfoList} />
        <LinkCustom href={course.enroll} variant="primary" external>
          {introLocalizedContent[courseName]?.linkLabel}
        </LinkCustom>
      </div>
    </section>
  );
};
