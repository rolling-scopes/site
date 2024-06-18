import { compareNumbers } from './utils/compare-courses';
import { isCourse } from './utils/is-course';
import { CourseCard } from '@/app/components';

import { finedNearestCourse } from '@/app/entities/courses/helpers/fined-nearest-course';
import { useDataByName } from '@/shared/hooks/use-data-by-name';

import { Title, TitleType } from '@/shared/ui/title';

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
        <Title text="All courses" type={TitleType.Regular} />
        <div className="rs-courses-wrapper" data-testid="courses-fancy">
          {sortedCourses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </div>
      </div>
    </section>
  );
};
