import { Title, ButtonOutlined, DateLang, SectionLabel, Subtitle } from '@/app/components';
import { useCourseByTitle, useTitle } from '@/app/hooks';
import './course-main.scss';
import { type CourseType } from '@/app/types';

interface CourseMainProps {
  courseName: string;
  type?: CourseType;
}

export const CourseMain = ({ courseName, type }: CourseMainProps) => {
  const { course, hasError } = useCourseByTitle(courseName, type);
  useTitle(`${course?.title || ''} · The Rolling Scopes School`);

  if (hasError || !course) {
    return <p>Error fetching course. Try again.</p>;
  }

  const now = new Date();
  const requiredDate = new Date(course.startDate || now);
  const label = requiredDate > now ? 'available' : 'unavailable';

  const { title, altTitle, language, mode, detailsUrl, secondaryIcon, startDate } = course;

  return (
    <main className="nodejs-main container">
      <div className="nodejs-main content column-2">
        <div className="icon">
          <img src={secondaryIcon} alt={title} />
        </div>
        <div className="info">
          <SectionLabel label={label} />
          <Title text={altTitle || title} />
          {type && <Subtitle text={type} />}
          <DateLang startDate={startDate} language={language} mode={mode} />
          <ButtonOutlined label="Enroll" href={detailsUrl} />
        </div>
      </div>
    </main>
  );
};
