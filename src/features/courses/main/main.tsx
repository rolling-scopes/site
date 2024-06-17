import mentors from '@/assets/mentor-with-his-students.webp';
import Image from '@/features/image';
import { Title, TitleType } from '@/shared/ui/title';

import './main.scss';

export const Main = () => {
  return (
    <main id="main" className="courses-main container">
      <div className="courses-main content">
        <div className="left">
          <div className="title-container">
            <Title text="Our Courses" type={TitleType.ExtraBig} />
          </div>
          <h2 className="description">Journey to full stack mastery</h2>
        </div>
        <Image src={mentors} alt="Mentor with students" className="right picture" />
      </div>
    </main>
  );
};
