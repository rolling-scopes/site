import classNames from 'classnames/bind';

import { AboutCourseSectionData, Course } from '@/entities/course/types';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, introLocalizedContent } from 'data';

import styles from './about-course.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseSectionProps = AboutCourseSectionData & {
  courseName: Course['title'];
};

export const AboutCourseSection = async ({
  courseName,
  // gridItems,
  heading,
  registrationClosedLinkText,
  registrationLinkText,
}: AboutCourseSectionProps) => {
  const course = await selectCourse(courseName);

  const linkText = course.enroll ? registrationLinkText : registrationClosedLinkText;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{heading}</WidgetTitle>
        {introLocalizedContent[courseName as CourseNamesKeys]?.paragraph && (
          <Paragraph>{introLocalizedContent[courseName as CourseNamesKeys].paragraph}</Paragraph>
        )}
        {/* <AboutCourseGrid items={courseInfoList} /> */}
        <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
          {linkText}
        </LinkCustom>
      </div>
    </section>
  );
};
