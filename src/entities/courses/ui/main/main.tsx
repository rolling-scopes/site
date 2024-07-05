import mentors from '@/shared/assets/mentor-with-his-students.webp';
import Image from '@/shared/ui/image';
import { MainTitle } from '@/shared/ui/main-title';

import './main.scss';

export const Main = () => {
  return (
    <main id="main" className="courses-main container">
      <div className="courses-main content">
        <div className="left">
          <div className="title-container">
            <MainTitle>Our Courses</MainTitle>
          </div>
          <h2 className="description">Journey to full stack mastery</h2>
        </div>
        <Image src={mentors} alt="Mentor with students" className="right picture" />
      </div>
    </main>
  );
};
