import { Subtitle, Title, TitleType } from '@/shared/components';

import mentors from '@/assets/mentor with his students.png';

import './Main.scss';

export const Main = () => {
  return (
    <main id="main" className="courses-main container">
      <div className="courses-main content">
        <div className="left">
          <div className="title-container">
            <Title text="RS School" type={TitleType.ExtraBig} />
            <Subtitle text="Free courses. High motivation" />
          </div>
          <h2 className="description">Journey to full stack mastery</h2>
        </div>
        <img src={mentors} alt="Mentors with students" className="right picture" />
      </div>
    </main>
  );
};
