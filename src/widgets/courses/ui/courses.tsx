import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import { Course } from '@/app/types';
import { CourseCard } from '@/entities/courses';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { getActualData } from '@/shared/helpers/getActualData';
import { useDataByName } from '@/shared/hooks/use-data-by-name';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './courses.scss';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  if (!courses || courses.length === 0) {
    return null;
  }

  const sortParams = {
    data: courses.filter(isCourse),
    staleAfter: COURSE_STALE_AFTER_DAYS,
    filterStale: false,
  };

  const sortedCourses: Course[] = getActualData(sortParams);

  return (
    <section className="rs-courses container" id="upcoming-courses">
      <div className="rs-courses content">
        <WidgetTitle>All courses</WidgetTitle>
        <div className="rs-courses-wrapper" data-testid="courses-fancy">
          {sortedCourses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </div>
      </div>
    </section>
  );
};
