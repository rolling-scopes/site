import { Title, Subtitle, Paragraph } from '@/app/components';

import image from '@/assets/about.webp';

import './about.scss';

export const About = () => {
  return (
    <div className="about container" id="about">
      <div className="about content column-2">
        <div className="left">
          <Title text="Who we are" hasAsterisk />
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
              technologies such as JavaScript, Front-end development, AWS, and more. Currently, many
              developers around the world recognize The Rolling Scopes for its community-based
              education program, RS School, along with fascinating events and its groovy mascot,
              Sloth.
            </div>
          </Paragraph>
        </div>
        <img className="right picture" src={image} alt="Logo" />
      </div>
    </div>
  );
};
