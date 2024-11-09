import { AboutList } from './about-list';
import { getCourses } from '@/entities/course/api/course-api.ts';
import { SchoolMenu } from '@/widgets/school-menu';

export const DesktopView = async () => {
  const courses = await getCourses();

  return (
    <div className="desktop-view" data-testid="desktop-view">
      <div className="left">
        <AboutList />
        <SchoolMenu courses={courses} heading="rs school" />
      </div>

      <div className="right">
        <SchoolMenu courses={courses} heading="all courses" />
      </div>
    </div>
  );
};
