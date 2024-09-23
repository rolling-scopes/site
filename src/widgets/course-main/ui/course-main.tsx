import classNames from 'classnames/bind';
import { useLoaderData } from 'react-router-dom';
import { getCourseStatus } from '../helpers/get-course-status';
import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import type { Course } from '@/entities/course';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { useTitle } from '@/shared/hooks/use-title';
import { DateLang } from '@/shared/ui/date-lang';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './course-main.module.scss';

const cx = classNames.bind(styles);

export type CourseMainProps = {
  courseName: string;
  lang?: 'ru' | 'en';
  type?: 'Pre-school RU';
};

const localizedContent = {
  en: { linkLabel: 'Enroll' },
  ru: { linkLabel: 'Присоединиться' },
};

export const CourseMain = ({ courseName, lang = 'en', type }: CourseMainProps) => {
  const courses = useLoaderData() as Course[];

  const course = selectCourse(courses, courseName);

  useTitle(`${course?.title || ''} · The Rolling Scopes School`);

  if (!course) {
    return <p>Error fetching course. Try again.</p>;
  }

  const { title, altTitle, language, mode, enroll, secondaryIcon, startDate } = course;
  const status = getCourseStatus(startDate);
  const date = getCourseDate(startDate, COURSE_STALE_AFTER_DAYS);

  return (
    <main className={cx('container')}>
      <div className={cx('content')}>
        <Image className={cx('icon')} src={secondaryIcon} alt={title} lazy={false} />
        <div>
          <SectionLabel>{status}</SectionLabel>
          <WidgetTitle>{`${altTitle || title} Course`}</WidgetTitle>
          {type && (
            <Subtitle fontSize="small" color="black">
              {type}
            </Subtitle>
          )}
          <DateLang startDate={date} language={language} mode={mode} withMargin />
          <LinkCustom href={enroll} variant="secondary" external>
            {localizedContent[lang].linkLabel}
          </LinkCustom>
        </div>
      </div>
    </main>
  );
};
