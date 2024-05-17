import { useLoaderData } from 'react-router-dom';
import { getCourseStatus } from './utils';
import { ButtonOutlined, DateLang, SectionLabel, Title } from '@/app/components';
import { useTitle } from '@/app/hooks';
import { selectCourse } from '@/app/hooks/use-course-by-title/utils/select-course.ts';
import { Course } from '@/app/types';
import Image from '@/features/image';

import styles from './course-main.module.scss';

interface CourseMainProps {
  courseName: string;
}

export const CourseMain = ({ courseName }: CourseMainProps) => {
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
          {/* { <Subtitle text={} type="course-main" />} */}
          <DateLang startDate={startDate} language={language} mode={mode} type="main" />
          <ButtonOutlined label="Enroll" href={enroll} />
        </div>
      </div>
    </main>
  );
};
