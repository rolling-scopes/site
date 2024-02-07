import { useWindowSize } from '@/app/hooks';
import { Copyright } from './copyright/copyright';
import { MobileFooter } from './mobile-footer/mobile-footer';
import { DesktopFooter } from './desktop-footer/desktop-footer';
import './footer.scss';

export const Footer = () => {
  const { width } = useWindowSize();

  const content = width >= 810 ? <DesktopFooter /> : <MobileFooter />;

  return (
    <footer className="footer container">
      <div className="footer content">
        {content}
        <Copyright />
      </div>
    </footer>
  );
};
