import { AboutList } from './about-list';
import { getCourses } from '@/entities/course/api/course-api';
import { SchoolMenu } from '@/widgets/school-menu';
import { schoolMenuStaticLinks } from 'data';

export const DesktopView = async () => {
  const courses = await getCourses();

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
              icon={course.iconFooter}
              title={course.title}
              description={course.startDate}
              url={course.detailsUrl}
              color="light"
            />
          ))}
        </SchoolMenu>
      </div>
    </div>
  );
};
