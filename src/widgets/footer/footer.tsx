import { Copyright } from './ui/copyright';
import { DesktopView } from './ui/desktop-view';
import { courseStore } from '@/entities/course';
import { MobileView } from '@/widgets/mobile-view';

import './footer.scss';

export const Footer = async () => {
  const courses = await courseStore.loadCourses();

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
