import { compareNumbers } from './utils/compare-courses';
import { CourseCard, Title, TitleType } from '@/app/components';
import { useDataByName, useNearestCourse } from '@/app/hooks';
import { type Course } from '@/app/types';

import './courses.scss';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');
  const {
    course: nearestCourse,
    loading: nearestLoading,
    hasError: nearestHasError,
  } = useNearestCourse();
  const dateNow = Date.now();

  let courseContent;
  if (nearestLoading) {
    courseContent = <p>Loading...</p>;
  } else if (nearestHasError) {
    courseContent = <p>Error loading courses.</p>;
  } else if (nearestCourse) {
    courseContent = <CourseCard {...nearestCourse} />;
  } else {
    courseContent = <p>No courses found.</p>;
  }

  if (courses === null) return null;
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const sortedCourses = (courses as Course[]).sort(compareNumbers);

  return (
    <div className="rs-courses container" id="upcoming-courses">
      <div className="rs-courses content">
        <Title text="Nearest course" hasAsterisk type={TitleType.Big} />
        <div className="card-wrapper">{courseContent}</div>

        <Title text="Other curses" type={TitleType.Regular} />
        <div className="rs-courses-wrapper">
          {sortedCourses.map((course) => {
            if (course.id === nearestCourse?.id) return;
            return (
              <CourseCard
                key={course.id}
                {...course}
                startDate={dateNow < Date.parse(course.startDate) ? course.startDate : '(Upcoming)'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
