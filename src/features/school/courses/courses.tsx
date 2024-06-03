import { getCourseIcon } from './lib/getCourseIcon';
import { IconsTitle } from './lib/icons.data';
import { selectCourses } from './lib/selectCourses';
import { CourseCard } from './ui/CourseCard';
import { Button } from '@/app/components';
import { useWindowSize } from '@/app/hooks';
import { courses } from '@/app/services/data';
import { RsBanner } from '@/icons';

import './courses.scss';

export const Courses = () => {
  const size = useWindowSize();
  const laptopScreenBreakPoint = 1440;
  const tabletScreenBreakPoint = 810;
  const coursesData = selectCourses(courses);

  let buttonText = 'More details';
  if (size.width <= tabletScreenBreakPoint) {
    buttonText = '';
  } else if (size.width <= laptopScreenBreakPoint) {
    buttonText = 'More';
  }

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
    <article id="upcoming-courses" className="courses container">
      <section className="courses content">
        <h4 className="title">Upcoming courses</h4>
        <div className="column-2">
          <div className="courses" data-testid="courses-list">
            {coursesContent}
            <Button label="Go to courses " href="./courses/" />
          </div>
          <figure className="image">
            <RsBanner />
          </figure>
        </div>
      </section>
    </article>
  );
};
