import { cloneElement } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { isTrainingProgramType } from '@/shared/helpers/is-training-program';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, contentMap, trainingProgramLink } from 'data';

import styles from './training-program.module.scss';

const cx = classNames.bind(styles);

type TrainingProgramProps = {
  courseName: CourseNamesKeys;
};

export const TrainingProgram = async ({ courseName }: TrainingProgramProps) => {
  const course = await selectCourse(courseName);
  const { language } = course;
  const programName = courseName;
  const contentName = isTrainingProgramType(programName) ? programName : courseName;
  const isCourseWithBadge = courseName.includes('badge');

  const { title, content, image } = contentMap[contentName];
  const registrationLinkText = course.enroll
    ? trainingProgramLink[language].linkLabel
    : trainingProgramLink[language].noLinkLabel;
  const enrollHref = course.enroll ?? '';

  return (
    <section className={cx('training-program', 'container')}>
      <div className={cx('training-program', 'content', 'column-2')}>
        <article className={cx('left')}>
          <WidgetTitle mods="asterisk">{title}</WidgetTitle>

          {content.map((component, index) => cloneElement(component, { key: index }))}

          {course && (
            <LinkCustom href={enrollHref} variant="primary" external disabled={!course.enroll}>
              {registrationLinkText}
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
