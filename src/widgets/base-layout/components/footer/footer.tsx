import { Copyright } from './copyright';
import { DesktopView } from './desktop-view';
import { MobileView } from '@/widgets/mobile-view';

import './footer.scss';

export const Footer = () => {
  const width = 1200; // useWindowSize();

  const content = width >= 810 ? <DesktopView /> : <MobileView type="footer" />;

  return (
    <footer className="footer container" data-testid="footer">
      <div className="footer content">
        {content}
        <Copyright />
      </div>
    </footer>
  );
};
