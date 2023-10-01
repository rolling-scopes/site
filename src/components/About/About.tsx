import React from 'react';
import image from '../../assets/about.png';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';
import { Paragraph } from '../Paragraph/Paragraph';

import './About.scss';

export const About: React.FC = () => {
  return (
    <div className="about container">
      <div className="about content">
        <div className="left">
          <Title text="Who we are" asterix />
          <Subtitle
            text="Our mission is to provide free education in intriguing subjects, connect people, and grow
          together."
          />
          <Paragraph>
            <div>
              The Rolling Scopes was founded in 2013 in Minsk as a community of Front-end
              developers. It has since grown into an enormous international developers community.
            </div>
            <br />
            <div>
              The Rolling Scopes brings together developers of all levels who are passionate about
              technologies such as JavaScript, Front-end development, AWS, iOS, Android, and more.
              Currently, many developers around the world recognize The Rolling Scopes for its
              community-based education program, RS School, along with fascinating events and its
              groovy mascot, Sloth.
            </div>
          </Paragraph>
        </div>
        <img className="right picture" src={image} alt="Logo" />
      </div>
    </div>
  );
};
