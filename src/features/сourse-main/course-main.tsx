import { Title, ButtonOutlined, DateLang, SectionLabel } from '@/app/components';
import { useCourseByTitle, useTitle } from '@/app/hooks';
import './course-main.scss';

interface CourseMainProps {
  courseType: string;
}

export const CourseMain = ({ courseType }: CourseMainProps) => {
  useTitle(`${courseType} · The Rolling Scopes School`);

  const { course, loading, hasError } = useCourseByTitle(courseType);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (hasError || !course) {
    return <p>Error fetching course. Try again.</p>;
  }

  const now = new Date();
  const requiredDate = new Date(course.startDate || now);
  const label = requiredDate > now ? 'available' : 'unavailable';

  const { title, language, mode, detailsUrl, secondaryIcon, startDate } = course;

  return (
    <main className="nodejs-main container">
      <div className="nodejs-main content column-2">
        <div className="icon">
          <img src={secondaryIcon} alt={title} />
        </div>
        <div className="info">
          <SectionLabel label={label} />
          <Title text={title} />
          <DateLang startDate={startDate} language={language} mode={mode} />
          <ButtonOutlined label="Enroll" href={detailsUrl} />
        </div>
      </div>
    </main>
  );
};
