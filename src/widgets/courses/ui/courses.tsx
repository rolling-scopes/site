import classNames from 'classnames/bind';
import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import { type Course, CourseCard } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';
import { isCourse } from '@/shared/helpers/is-course';
import { useDataByName } from '@/shared/hooks/use-data-by-name';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { DataMap } from 'data';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

type CoursesProps = { lang?: 'en' | 'ru' };

const localizedContent = {
  en: { title: 'All courses' },
  ru: { title: 'Все курсы' },
};

type PathNames = keyof DataMap;
const PATH: PathNames = 'courses';

export const Courses = ({ lang = 'en' }: CoursesProps) => {
  const { data: courses, loading, error } = useDataByName<PathNames>(PATH);

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
    <section className={cx('container')} id="upcoming-courses">
      <div className={cx('content')}>
        <WidgetTitle>{localizedContent[lang].title}</WidgetTitle>
        <article className={cx('wrapper')} data-testid="courses-fancy">
          {sortedCourses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </article>
      </div>
    </section>
  );
};
