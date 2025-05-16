import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { CoursePageSectionProps } from '@/entities/course/types';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './training-program.module.scss';

const cx = classNames.bind(styles);

export type TrainingProgramData = {
  title: string;
  content: ReactNode;
  registrationLinkText?: string;
  registrationClosedLinkText?: string;
  image: StaticImageData;
};

export const TrainingProgramSection = async ({
  courseName,
  sectionData,
}: CoursePageSectionProps) => {
  const course = await selectCourse(courseName);
  const isCourseWithBadge = courseName.includes('badge');

  const linkText = sectionData.registrationLinkText;
  const registrationClosedLinkText = sectionData.registrationClosedLinkText;
  const registrationLinkText = course.enroll ? linkText : registrationClosedLinkText;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('training-program', 'container')}>
      <div className={cx('training-program', 'content', 'column-2')}>
        <article className={cx('left')}>
          <WidgetTitle mods="asterisk">{sectionData.title}</WidgetTitle>

          {sectionData.content}

          {course && (
            <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
              {registrationLinkText}
            </LinkCustom>
          )}
        </article>

        <Image
          data-testid="image"
          src={sectionData.image}
          alt={course?.title}
          className={cx('image', { badge: isCourseWithBadge })}
        />
      </div>
    </section>
  );
};
