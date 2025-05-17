import classNames from 'classnames/bind';
import Image from 'next/image';

import { TrainingProgramSectionData } from '@/entities/course/types';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './training-program.module.scss';

const cx = classNames.bind(styles);

type TrainingProgramSectionProps = TrainingProgramSectionData & {
  courseName: string;
};

export const TrainingProgramSection = async ({
  courseName,
  title,
  image,
  content,
  registrationLinkText,
  registrationClosedLinkText,
}: TrainingProgramSectionProps) => {
  const course = await selectCourse(courseName);
  const isCourseWithBadge = courseName.includes('badge');

  const linkText = course.enroll ? registrationLinkText : registrationClosedLinkText;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('training-program', 'container')}>
      <div className={cx('training-program', 'content', 'column-2')}>
        <article className={cx('left')}>
          <WidgetTitle mods="asterisk">{title}</WidgetTitle>

          {content}

          {course && (
            <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
              {linkText}
            </LinkCustom>
          )}
        </article>

        <Image
          data-testid="image"
          src={image}
          alt={course?.title}
          className={cx('image', { badge: isCourseWithBadge })}
        />
      </div>
    </section>
  );
};
