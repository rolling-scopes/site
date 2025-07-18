import classNames from 'classnames/bind';
import Image from 'next/image';

import { Course } from '@/entities/course';
import { LABELS } from '@/shared/constants';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { MainTitle } from '@/shared/ui/main-title';
import { ShortInfoPanel } from '@/shared/ui/short-info-panel';
import { AvailabilityStatus } from '@/widgets/hero-course/ui/availability-status';
import { RegistrationLink } from '@/widgets/hero-course/ui/registration-link';

import styles from './hero-course.module.scss';

const cx = classNames.bind(styles);

type HeroCourseProps = {
  courseName: Course['title'];
};

export const HeroCourse = async ({ courseName }: HeroCourseProps) => {
  const course = await selectCourse(courseName);
  const {
    title,
    subTitle,
    altTitle,
    language,
    enroll,
    secondaryIcon,
    startDate,
    registrationEndDate,
  } = course;

  return (
    <section className={cx('hero-course', 'container')} data-testid="hero-course">
      <div className={cx('hero-course-content', 'content')}>
        <Image
          className={cx('course-logo')}
          src={secondaryIcon}
          alt={`${title}-logo`}
          data-testid="hero-image"
        />
        <article>
          <AvailabilityStatus startDate={startDate} registrationEndDate={registrationEndDate} />
          <MainTitle size="small">{`${altTitle || title} Course`}</MainTitle>
          {subTitle && (
            <p data-testid="course-subtitle" className={cx('hero-subtitle')}>
              {subTitle}
            </p>
          )}
          <ShortInfoPanel
            label={LABELS.START_DATE}
            startDate={startDate}
            registrationEndDate={registrationEndDate}
            language={language}
            withMargin
          />
          <RegistrationLink
            enrollLink={enroll}
            language={language}
            startDate={startDate}
            registrationEndDate={registrationEndDate}
          />
        </article>
      </div>
    </section>
  );
};
