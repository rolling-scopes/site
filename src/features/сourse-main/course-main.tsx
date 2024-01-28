import { Title, ButtonOutlined, DateLang, SectionLabel } from '@/app/components';
import { NodeJsIcon } from '@/icons';
import './course-main.scss';

export const CourseMain = () => {
  return (
    <main className="nodejs-main container">
      <div className="nodejs-main content column-2">
        <div className="icon">
          <NodeJsIcon width="200" height="192" />
        </div>
        <div className="info">
          <SectionLabel label="avialable" />
          <Title text="Node.js course" />
          <DateLang startDate="24 Jan, 2024" language="en" mode="online" />
          <ButtonOutlined label="Enroll" href="https://wearecommunity.io/events/nodejs-rs-2024q1" />
        </div>
      </div>
    </main>
  );
};
