import { Copyright } from './copyright';
import { DesktopView } from './desktop-view';

import { getCourses } from '@/entities/course/api/course-api.ts';
import { MobileView } from '@/widgets/mobile-view';

import './footer.scss';

export const Footer = async () => {
  const courses = await getCourses();

  return (
    <footer className="footer container" data-testid="footer">
      <div className="footer content">
        <DesktopView />
        <MobileView courses={courses} type="footer" />
        <Copyright />
      </div>
    </footer>
  );
};
