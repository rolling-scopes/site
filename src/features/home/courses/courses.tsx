import { formatCoursesData } from './lib/formatCoursesData';
import { IconsTitle, getCourseIcon } from './lib/getCourseIcon';
import { CourseCard } from './ui/CourseCard';
import { Button } from '@/app/components';
import { useDataByName, useWindowSize } from '@/app/hooks';
import { Course } from '@/app/types';
import { RsBanner } from '@/icons';

import './courses.scss';

export const Courses = () => {
  const size = useWindowSize();
  const res = useDataByName('courses');
  const coursesData = formatCoursesData(res?.data as Course[]);
  const { loading, error } = res;

  let buttonText = 'More details';
  if (size.width <= 810) {
    buttonText = '';
  } else if (size.width <= 1440) {
    buttonText = 'More';
  }

  if (loading || error) return;

  const coursesContent = coursesData?.map(({ title, language, startDate, detailsUrl }) => {
    const courseIcon = getCourseIcon(title as IconsTitle);
    return (
      <CourseCard
        title={title}
        language={language}
        startDate={startDate}
        detailsUrl={detailsUrl}
        icon={courseIcon}
        buttonText={buttonText}
        key={title}
      />
    );
  });

  return (
    <article className="courses container">
      <section className="courses content">
        <h4 className="title">Upcoming courses</h4>
        <div className="column-2">
          <div className="courses">
            {coursesContent}
            <Button label="Go to RS School " href="https://rs.school/" />
          </div>
          <figure className="image">
            <RsBanner />
          </figure>
        </div>
      </section>
    </article>
  );
};
