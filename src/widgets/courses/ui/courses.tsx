import { CourseCard, finedNearestCourse } from '@/entities/courses';
import { compareNumbers } from '@/entities/courses/helpers/compare-courses';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { useDataByName } from '@/shared/hooks/use-data-by-name';
import { WidgetTitle } from '@/shared/ui/widget-title/widget-title';

import './courses.scss';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;
  if (!courses || courses.length === 0) return null;

  const nearestCourse = finedNearestCourse(courses);
  const nearestCourseStartDate = nearestCourse ? Date.parse(nearestCourse.startDate) : Date.now();

  const sortedCourses = courses
    .filter(isCourse)
    .sort((a, b) => compareNumbers(a, b, nearestCourseStartDate))
    .map((course) => {
      return {
        ...course,
        startDate:
          nearestCourseStartDate <= Date.parse(course.startDate) ? course.startDate : '(TBD)',
      };
    });

  return (
    <section className="rs-courses container" id="upcoming-courses">
      <div className="rs-courses content">
        <WidgetTitle size="medium">All courses</WidgetTitle>
        <div className="rs-courses-wrapper" data-testid="courses-fancy">
          {sortedCourses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </div>
      </div>
    </section>
  );
};
