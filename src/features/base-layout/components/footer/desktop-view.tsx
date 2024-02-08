import { AboutList } from './about-list';
import { SchoolMenu } from '@/app/components';

export const DesktopView = () => {
  return (
    <div className="desktop-view" data-testid="desktop-view">
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
