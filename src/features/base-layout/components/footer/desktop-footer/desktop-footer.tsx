import { AboutList } from '../about-list';
import { SchoolMenu } from '../school-menu';

export const DesktopFooter = () => {
  return (
    <div className="info-wrapper">
      <div className="left">
        <AboutList />
        <SchoolMenu heading="rs school" />
      </div>

      <div className="right">
        <SchoolMenu heading="all courses" />
      </div>
    </div>
  );
};
