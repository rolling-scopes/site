import { getCourseIcon } from './lib/getCourseIcon';
import { IconsTitle } from './lib/icons.data';
import { selectCourses } from './lib/selectCourses';
import { CourseCard } from './ui/CourseCard';
import { ROUTES } from '@/app/const';

import { courses } from '@/app/services/data';
import { ArrowIcon, RsBanner } from '@/icons';
import { useWindowSize } from '@/shared/hooks/use-window-size';
import { LinkCustom } from '@/shared/ui/link-custom';

import './courses.scss';

export const Courses = () => {
  const size = useWindowSize();
  const laptopScreenBreakPoint = 1440;
  const tabletScreenBreakPoint = 810;
  const coursesData = selectCourses(courses);

  let linkLabel = 'More details';

  if (size.width <= tabletScreenBreakPoint) {
    linkLabel = '';
  } else if (size.width <= laptopScreenBreakPoint) {
    linkLabel = 'More';
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
        buttonText={linkLabel}
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
            <LinkCustom href={ROUTES.COURSES} icon={<ArrowIcon />} variant="colored" button>
              Go to courses
            </LinkCustom>
          </div>
          <figure className="image">
            <RsBanner />
          </figure>
        </div>
      </section>
    </article>
  );
};
