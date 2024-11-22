import { AboutList } from './about-list';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { getCourseDate } from '@/shared/helpers/getCourseDate.ts';
import { SchoolMenu } from '@/widgets/school-menu';
import { courses, schoolMenuStaticLinks } from 'data';

export const DesktopView = () => {
  return (
    <div className="desktop-view" data-testid="desktop-view">
      <div className="left">
        <AboutList />
        <SchoolMenu heading="rs school" color="light">
          {schoolMenuStaticLinks.map((link, i) => (
            <SchoolMenu.Item
              key={i}
              title={link.title}
              description={link.description}
              url={link.detailsUrl}
              color="light"
            />
          ))}
        </SchoolMenu>
      </div>

      <div className="right">
        <SchoolMenu heading="all courses" color="light">
          {courses.map((course) => (
            <SchoolMenu.Item
              key={course.id}
              icon={course.iconSmall}
              title={course.title}
              description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
              url={course.detailsUrl}
              color="light"
            />
          ))}
        </SchoolMenu>
      </div>
    </div>
  );
};
