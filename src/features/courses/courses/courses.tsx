import { CourseCard, Title, TitleType } from '@/app/components';
import { useDataByName } from '@/app/hooks';
import './courses.scss';
import { type Course } from '@/app/types';
import { compareNumbers } from './utils/compare-courses';
import { finedNearestCourse } from '@/app/hooks/use-nearest-course';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!courses) return null;

  const nearestCourse = finedNearestCourse(courses);
  const nearestCourseStartDate = nearestCourse
    ? Date.parse(nearestCourse.startDate)
    : Date.now();

  const sortedCourses = (courses as Course[]).sort((a, b) => compareNumbers(a, b, nearestCourseStartDate))

  return (
    <div className="rs-courses container" id="upcoming-courses">
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
    </div>
  );
};
