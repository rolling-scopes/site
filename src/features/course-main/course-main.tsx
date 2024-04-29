import { hasDayInDate } from './utils/has-day';
import { ButtonOutlined, DateLang, SectionLabel, Subtitle, Title } from '@/app/components';
import { useCourseByTitle, useTitle } from '@/app/hooks';
import { type Course, type CourseType } from '@/app/types';
import Image from '@/features/image';

import './course-main.scss';

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
