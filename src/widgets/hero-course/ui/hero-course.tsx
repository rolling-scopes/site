import classNames from 'classnames/bind';
import Image from 'next/image';
import { getCourseStatus } from '../helpers/get-course-status';
import { dayJS } from '@/shared/helpers/dayJS';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { DateLang } from '@/shared/ui/date-lang';
import { LinkCustom } from '@/shared/ui/link-custom';
import { MainTitle } from '@/shared/ui/main-title';
import { SectionLabel } from '@/shared/ui/section-label';
import { CourseNamesKeys, heroCourseLocalized } from 'data';

import styles from './hero-course.module.scss';

const cx = classNames.bind(styles);

type HeroCourseProps = {
  courseName: CourseNamesKeys;
};

export const HeroCourse = async ({ courseName }: HeroCourseProps) => {
  const course = await selectCourse(courseName);
  const {
    title,
    subTitle,
    altTitle,
    language,
    mode,
    enroll,
    secondaryIcon,
    startDate,
    registrationEndDate,
  } = course;
  const status = getCourseStatus(startDate, dayJS(registrationEndDate).diff(startDate, 'd'));

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
          <SectionLabel data-testid="course-label">{status}</SectionLabel>
          <MainTitle size="small">{`${altTitle || title} Course`}</MainTitle>
          {subTitle && (
            <p data-testid="course-subtitle" className={cx('hero-subtitle')}>
              {subTitle}
            </p>
          )}
          <DateLang
            startDate={startDate}
            registrationEndDate={registrationEndDate}
            language={language}
            mode={mode}
            withMargin
          />
          <LinkCustom href={enroll} variant="secondary" external>
            {heroCourseLocalized[language].linkLabel}
          </LinkCustom>
        </article>
      </div>
    </section>
  );
};
