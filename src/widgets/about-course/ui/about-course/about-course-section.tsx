import classNames from 'classnames/bind';

import { AboutCourseSectionData, Course } from '@/entities/course/types';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { GridItem } from '@/widgets/about-course/ui/about-course-grid/grid-item';

import styles from './about-course-section.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseSectionProps = AboutCourseSectionData & {
  courseName: Course['title'];
};

export const AboutCourseSection = async ({
  courseName,
  title,
  subTitle,
  gridItems,
  registrationClosedLinkText,
  registrationLinkText,
}: AboutCourseSectionProps) => {
  const course = await selectCourse(courseName);

  const linkText = course.enroll ? registrationLinkText : registrationClosedLinkText;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{title}</WidgetTitle>
        {subTitle && <Paragraph>{subTitle}</Paragraph>}
        <div className={cx('about-course-grid')} data-testid="about-course-grid">
          {gridItems.map(({ id, heading, content, icon }) => (
            <GridItem
              key={id}
              id={id}
              heading={heading}
              content={content}
              icon={icon}
            />
          ))}
        </div>
        <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
          {linkText}
        </LinkCustom>
      </div>
    </section>
  );
};
