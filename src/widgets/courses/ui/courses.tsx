import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import { Course } from '@/app/types';
import { CourseCard } from '@/entities/courses';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { getActualDataList } from '@/shared/helpers/getActualDataList';
import { useDataByName } from '@/shared/hooks/use-data-by-name';
import { Title, TitleType } from '@/shared/ui/title';

import './courses.scss';

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName('courses');

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;
  if (!courses || courses.length === 0) return null;

  const sortParams = {
    dataList: courses.filter(isCourse),
    actualDelayInDays: COURSE_STALE_AFTER_DAYS,
    filtered: false,
  };

  const sortedCourses = getActualDataList(sortParams) as Course[];

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
