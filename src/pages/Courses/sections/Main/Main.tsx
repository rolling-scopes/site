import React from 'react';

import { Title, TitleType } from '../../../../components';

import mentors from '../../../../assets/mentor with his students.png';

import './Main.scss';

export const Main: React.FC = () => {
  return (
    <main id="main" className="courses-main container">
      <div className="courses-main content">
        <div className="left">
          <div className="title-container">
            <Title text="RS School" type={TitleType.ExtraBig} />
            <div className="subtitle">
              <div>Free courses. High motivation</div>
            </div>
          </div>
          <div className="description">Journey to full stack mastery</div>
        </div>
        <img src={mentors} alt="Mentors with students" className="right picture" />
      </div>
    </main>
  );
};
