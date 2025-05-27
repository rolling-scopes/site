import { AboutList } from './about-list';
import { Course } from '@/entities/course';
import { CourseMenuItemsFresh } from '@/shared/ui/course-menu-items-fresh';
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
          <CourseMenuItemsFresh courses={courses} color="light" icon="iconFooter" />
        </SchoolMenu>
      </div>
    </div>
  );
};
