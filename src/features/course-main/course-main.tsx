import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { hasDayInDate } from './utils/has-day';
import { ButtonOutlined, DateLang, SectionLabel, Subtitle, Title } from '@/app/components';
import { useCourseByTitle, useTitle } from '@/app/hooks';
import { Course, CourseType, Labels } from '@/app/types';
import Image from '@/features/image';

import styles from './course-main.module.scss';

interface CourseMainProps {
  courseName: string;
  type?: CourseType;
}

export const CourseMain = ({ courseName, type }: CourseMainProps) => {
  const { course: data, hasError } = useCourseByTitle(courseName, type);

  const course = data as Course;

  useTitle(`${course?.title || ''} · The Rolling Scopes School`);

  if (hasError || !course) {
    return <p>Error fetching course. Try again.</p>;
  }

  const { title, altTitle, language, mode, enroll, secondaryIcon, startDate } = course;

  const now = dayjs();
  const courseStartDate = dayjs(startDate);
  dayjs.extend(isBetween);

  const label =
    hasDayInDate(startDate) &&
    courseStartDate.isBetween(now.subtract(2, 'week'), now.add(2, 'week'))
      ? Labels.AVAILABLE
      : courseStartDate.isBetween(now, now.add(3, 'month'))
        ? Labels.UPCOMING
        : Labels.PLANNED;

  return (
    <main className={styles.container}>
      <Image className={styles.icon} src={secondaryIcon} alt={title} lazy="false" />
      <div className={styles.info}>
        <SectionLabel label={label} />
        <Title text={`${altTitle || title} Course`} />
        {type && <Subtitle text={type} type="course-main" />}
        <DateLang startDate={startDate} language={language} mode={mode} type="main" />
        <ButtonOutlined label="Enroll" href={enroll} />
      </div>
    </main>
  );
};
