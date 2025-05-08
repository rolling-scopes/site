import { Copyright } from './ui/copyright';
import { DesktopView } from './ui/desktop-view';
import { Course } from '@/entities/course';
import { MobileView } from '@/widgets/mobile-view';

import './footer.scss';

type FooterProps = {
  courses: Course[];
};

export const Footer = ({ courses }: FooterProps) => {
  return (
    <footer className="footer container" data-testid="footer">
      <div className="footer content">
        <DesktopView courses={courses} />
        <MobileView courses={courses} type="footer" />
        <Copyright />
      </div>
    </footer>
  );
};
