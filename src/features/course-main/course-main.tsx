import { useLoaderData } from 'react-router-dom';
import { hasDayInDate } from './utils/has-day';
import { ButtonOutlined, DateLang, SectionLabel, Subtitle, Title } from '@/app/components';
import { useTitle } from '@/app/hooks';
import selectCourse from '@/app/hooks/use-course-by-title/utils/select-course.ts';
import { Course, type CourseType } from '@/app/types';
import Image from '@/features/image';

import './course-main.scss';

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

  const now = new Date().setHours(0, 0, 0, 0);
  const requiredDate = new Date(course.startDate).setHours(0, 0, 0, 0);

  const label =
    requiredDate < now ? 'upcoming' : hasDayInDate(course.startDate) ? 'available' : 'planned';

  const { title, altTitle, language, mode, enroll, secondaryIcon, startDate } = course;

  return (
    <main className="course-main container">
      <div className="course-main content column-2">
        <div className="icon">
          <Image src={secondaryIcon} alt={title} lazy="false" />
        </div>
        <div className="info">
          <SectionLabel label={label} />
          <Title text={`${altTitle || title} Course`} />
          {type && <Subtitle text={type} />}
          <DateLang startDate={startDate} language={language} mode={mode} />
          <ButtonOutlined label="Enroll" href={enroll} />
        </div>
      </div>
    </main>
  );
};
