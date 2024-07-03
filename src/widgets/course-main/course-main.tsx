import { useLoaderData } from 'react-router-dom';
import { getCourseStatus } from './utils/get-course-status';
import { Course } from '@/app/types';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { useTitle } from '@/shared/hooks/use-title';
import { ArrowIcon } from '@/shared/icons';
import { DateLang } from '@/shared/ui/date-lang';
import Image from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { Title } from '@/shared/ui/title';

import styles from './course-main.module.scss';

interface CourseMainProps {
  courseName: string;
  lang?: 'ru' | 'en';
  type?: 'Mentoring Program EN' | 'Pre-school RU' | 'Менторская программа RU';
}

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

  return (
    <main className={`container ${styles.container}`}>
      <div className={`content ${styles.content}`}>
        <Image className={styles.icon} src={secondaryIcon} alt={title} lazy="false" />
        <div className={styles.info}>
          <SectionLabel label={status} />
          <Title text={`${altTitle || title} Course`} />
          {type && <Subtitle text={type} type="course-main" />}
          <DateLang startDate={startDate} language={language} mode={mode} />
          <LinkCustom
            href={enroll}
            icon={<ArrowIcon />}
            button
            variant="outlined"
            target="_blank"
          >
            {localizedContent[lang].linkLabel}
          </LinkCustom>
        </div>
      </div>
    </main>
  );
};
