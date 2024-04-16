import { CourseCard, Title, TitleType } from '@/app/components';
import { useDataByName } from '@/app/hooks';
import './courses.scss';
import { type Course } from '@/app/types';
import { compareNumbers } from './utils/compare-courses';
import { finedNearestCourse } from '@/app/hooks/use-nearest-course';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;
  if (!courses || courses.length === 0) return null;

  const nearestCourse = finedNearestCourse(courses);
  const nearestCourseStartDate = nearestCourse
    ? Date.parse(nearestCourse.startDate)
    : Date.now();

  const sortedCourses = (courses as Course[]).sort((a, b) => compareNumbers(a, b, nearestCourseStartDate))

  return (
    <section className="rs-courses container" id="upcoming-courses">
      <div className="rs-courses content">
        <Title text="Upcoming courses" type={TitleType.Regular} />
        <div className="rs-courses-wrapper">
          {sortedCourses.map(
            (course) => {
              return (
                <CourseCard
                  key={course.id}
                  {...course}
                  startDate={ nearestCourseStartDate <= Date.parse(course.startDate) ? course.startDate : '(Upcoming)' }
                />
              )
            }
          )}
        </div>
      </div>
    </section>
  );
};
