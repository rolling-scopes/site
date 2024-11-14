import classNames from 'classnames/bind';
import Image from 'next/image';
import { getCourseStatus } from '../helpers/get-course-status';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { Course } from '@/entities/course';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import { DateLang } from '@/shared/ui/date-lang';
import { LinkCustom } from '@/shared/ui/link-custom';
import { MainTitle } from '@/shared/ui/main-title';
import { SectionLabel } from '@/shared/ui/section-label';
import { heroCourseLocalized } from 'data';

import styles from './hero-course.module.scss';

const cx = classNames.bind(styles);

type HeroCourseProps = {
  course: Course;
  lang?: 'ru' | 'en';
  type?: 'pre-school-ru';
};

export const HeroCourse = ({ lang = 'en', type, course }: HeroCourseProps) => {
  const { title, altTitle, language, mode, enroll, secondaryIcon, startDate, registrationEndDate } =
    course;
  const status = getCourseStatus(startDate);
  const date = getCourseDate(startDate, COURSE_STALE_AFTER_DAYS);

  return (
    <section className={cx('hero-course', 'container')} data-testid="hero-course">
      <div className={cx('hero-course-content', 'content')}>
        <Image className={cx('course-logo')} src={secondaryIcon} alt={`${title}-logo`} />
        <article>
          <SectionLabel data-testid="course-label">{status}</SectionLabel>
          <MainTitle size="small">{`${altTitle || title} Course`}</MainTitle>
          {type && <p className={cx('hero-subtitle')}>{type}</p>}
          <DateLang
            startDate={date}
            registrationEndDate={registrationEndDate}
            language={language}
            mode={mode}
            withMargin
          />
          <LinkCustom href={enroll} variant="secondary" external>
            {heroCourseLocalized[lang].linkLabel}
          </LinkCustom>
        </article>
      </div>
    </section>
  );
};
