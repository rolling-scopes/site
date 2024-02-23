import { CourseCard } from '@/app/components';
import { useDataByName } from '@/app/hooks';
import './courses.scss';
import { type Course } from '@/app/types';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');

  if (courses === null) return null;

  const upcomingCourses = courses?.filter(({ title }) => !title.toLowerCase().startsWith('node'));

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="rs-courses container" id="upcoming-courses">
      <div className="rs-courses content">
        <div className="title">Upcoming courses</div>
        <div className="rs-courses-wrapper">
          {(upcomingCourses as Course[]).map(
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
