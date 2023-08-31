import React from 'react';
import image from '../../assets/about.png';

import './About.css';

export const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="title">Who we are</div>
        <div className="subtitle">
          Our mission is to provide free education in intriguing subjects, connect people, and grow
          together.
        </div>
        <div className="description">
          The Rolling Scopes was founded in 2013 in Minsk as a community of Front-end developers. It
          has since grown into an enormous international developers community.
        </div>
        <br />
        <br />
        <div className="description">
          The Rolling Scopes brings together developers of all levels who are passionate about
          technologies such as JavaScript, Front-end development, AWS, iOS, Android, and more.
          Currently, many developers around the world recognize The Rolling Scopes for its
          community-based education program, RS School, along with fascinating events and its groovy
          mascot, Sloth.
        </div>
      </div>
      <img className="picture" src={image} alt="Logo" />
    </div>
  );
};
