import { getCourseStatus } from './utils/get-course-status';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { Course } from '@/entities/course';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import { DateLang } from '@/shared/ui/date-lang';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './course-main.module.scss';

interface CourseMainProps {
  course: Course;
  lang?: 'ru' | 'en';
  type?: 'Pre-school RU';
}

const localizedContent = {
  en: { linkLabel: 'Enroll' },
  ru: { linkLabel: 'Присоединиться' },
};

export const CourseMain = ({ lang = 'en', type, course }: CourseMainProps) => {
  // const course = selectCourse(courses, courseName);

  // useTitle(`${course?.title || ''} · The Rolling Scopes School`);

  if (!course) {
    return <p>Error fetching course. Try again.</p>;
  }

  const { title, altTitle, language, mode, enroll, secondaryIcon, startDate } = course;
  const status = getCourseStatus(startDate);
  const date = getCourseDate(startDate, COURSE_STALE_AFTER_DAYS);

  return (
    <main className={`container ${styles.container}`}>
      <div className={`content ${styles.content}`}>
        <Image className={styles.icon} img={secondaryIcon} alt={title} lazy={false} />
        <div className={styles.info}>
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
