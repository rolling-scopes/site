import { Copyright } from './copyright';
import { DesktopView } from './desktop-view';

import { MobileView } from '@/widgets/mobile-view';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer container" data-testid="footer">
      <div className="footer content">
        <DesktopView />
        <MobileView type="footer" />
        <Copyright />
      </div>
    </footer>
  );
};
