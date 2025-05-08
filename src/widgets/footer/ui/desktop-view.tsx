import { AboutList } from './about-list';
import { Course } from '@/entities/course';
import { SchoolMenu } from '@/widgets/school-menu';
import { schoolMenuStaticLinks } from 'data';

type DesktopViewProps = {
  courses: Course[];
};
export const DesktopView = ({ courses }: DesktopViewProps) => {
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
