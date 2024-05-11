import { useLoaderData } from 'react-router-dom';
import { getCourseStatus } from './utils';
import { DateLang, LinkBtn, SectionLabel, Subtitle, Title } from '@/app/components';
import { useTitle } from '@/app/hooks';
import { selectCourse } from '@/app/hooks/use-course-by-title/utils/select-course.ts';
import { Course, CourseType } from '@/app/types';
import Image from '@/features/image';

import styles from './course-main.module.scss';

interface CourseMainProps {
  courseName: string;
  type?: CourseType;
}

export const CourseMain = ({ courseName, type }: CourseMainProps) => {
  const courses = useLoaderData() as Course[];

  const course = selectCourse(courses, courseName, type);

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
          <DateLang startDate={startDate} language={language} mode={mode} type="main" />
          <LinkBtn label="Enroll" href={enroll} outlined={true} color="black" target="_blank" />
        </div>
      </div>
    </main>
  );
};
