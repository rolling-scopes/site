import { useWindowSize } from '@/app/hooks';
import { Copyright } from './copyright';
import { MobileView } from '@/app/components';
import { DesktopView } from './desktop-view';
import './footer.scss';

export const Footer = () => {
  const { width } = useWindowSize();

  const content = width >= 810 ? <DesktopView /> : <MobileView type="footer" />;

  return (
    <footer className="footer container">
      <div className="footer content">
        {content}
        <Copyright />
      </div>
    </footer>
  );
};
