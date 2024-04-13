import { Subtitle, Title, TitleType } from '@/app/components';

import mentors from '@/assets/mentor-with-his-students.webp';

import './main.scss';

export const Main = () => {
  return (
    <main id="main" className="courses-main container">
      <article className="courses-main content">
        <div className="left">
          <div className="title-container">
            <Title text="RS School" type={TitleType.ExtraBig} />
            <Subtitle text="Free courses. High motivation" />
          </div>
          <h2 className="description">Journey to full stack mastery</h2>
        </div>
        <img src={mentors} alt="Mentors with students" className="right picture" />
      </article>
    </main>
  );
};
