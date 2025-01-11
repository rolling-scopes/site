import classNames from 'classnames/bind';
import { AboutCourseGrid } from '../about-course-grid/about-course-grid';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, contentMapAbout, introLocalizedContent } from 'data';

import styles from './about-course.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseProps = {
  courseName: CourseNamesKeys;
};

export const AboutCourse = async ({ courseName }: AboutCourseProps) => {
  const course = await selectCourse(courseName);
  const courseInfoList = contentMapAbout[courseName];
  const registrationLinkText = course.enroll
    ? introLocalizedContent[courseName]?.linkLabel
    : introLocalizedContent[courseName]?.noLinkLabel;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{introLocalizedContent[courseName].title}</WidgetTitle>
        {introLocalizedContent[courseName]?.paragraph && (
          <Paragraph>{introLocalizedContent[courseName].paragraph}</Paragraph>
        )}
        <AboutCourseGrid items={courseInfoList} />
        <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
          {registrationLinkText}
        </LinkCustom>
      </div>
    </section>
  );
};
