import classNames from 'classnames/bind';

import { AboutCourseGrid } from '../about-course-grid/about-course-grid';
import { Course } from '@/entities/course';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, contentMapAbout, introLocalizedContent } from 'data';

import styles from './about-course.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseProps = {
  courseName: Course['title'];
};

export const AboutCourse = async ({ courseName }: AboutCourseProps) => {
  // FIXME: refactor types to not rely on course names, since now they can be changed in contentful

  const course = await selectCourse(courseName);
  const courseInfoList = contentMapAbout[courseName as CourseNamesKeys];
  const registrationLinkText = course.enroll
    ? introLocalizedContent[courseName as CourseNamesKeys]?.linkLabel
    : introLocalizedContent[courseName as CourseNamesKeys]?.noLinkLabel;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{introLocalizedContent[courseName as CourseNamesKeys].title}</WidgetTitle>
        {introLocalizedContent[courseName as CourseNamesKeys]?.paragraph && (
          <Paragraph>{introLocalizedContent[courseName as CourseNamesKeys].paragraph}</Paragraph>
        )}
        <AboutCourseGrid items={courseInfoList} />
        <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
          {registrationLinkText}
        </LinkCustom>
      </div>
    </section>
  );
};
