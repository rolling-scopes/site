import { CourseCard } from '@/widgets';
import './Courses.scss';
import { useDataByName } from '@/shared/hooks/useDataByName';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');

  const upcomingCourses = courses?.filter(({ title }) => !title.toLowerCase().startsWith('node'));

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 style={{ color: 'red' }}>{error}</h1>;

  return (
    <div className="rs-courses container">
      <div className="rs-courses content">
        <div className="title">Upcoming courses</div>
        <div className="rs-courses-wrapper">
          {upcomingCourses?.map(
            ({ id, title, iconSrc, startDate, detailsUrl, mode, language, backgroundStyle }) => (
              <CourseCard
                key={id}
                title={title}
                iconSrc={iconSrc}
                startDate={startDate}
                detailsUrl={detailsUrl}
                mode={mode}
                language={language}
                backgroundStyle={backgroundStyle}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
