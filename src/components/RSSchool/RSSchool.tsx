import React from 'react';
import { Title } from '../Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';
import { Subtitle } from '../Subtitle/Subtitle';
import { Tag } from '../Tag/Tag';
import image from '../../assets/rs-school.png';

import './RSSchool.scss';

interface StydyOptionsProps {
  title: string;
  description: string;
}

const stydyOptions: StydyOptionsProps[] = [
  {
    title: 'Teach and empower',
    description:
      'We aim to provide education to everyone interested and assist in hiring the best students.'
  },
  {
    title: 'Connect and grow',
    description:
      'We strive to connect people, grow together, and build a solid educational community.'
  },
  {
    title: 'Foster mentoring culture',
    description:
      'We encourage a culture of mentoring where knowledge is shared and wisdom is passed on.'
  }
];

export const RSSchool: React.FC = () => (
  <div className="school container">
    <div className="school content">
      <div className="study">
        <div className="left">
          <Tag text="education" />
          <Title text="Study with RS School" asterix />
          <Subtitle text="RS School is a free and community-based online education program conducted by The Rolling Scopes Community since 2013. " />
          <Paragraph>
            Want to see photos of our community? A vast collection of photographs from our events is
            available on our Facebook Albums and Instagram pages.
          </Paragraph>
        </div>
        <img className="right picture" src={image} alt="education" />
      </div>
      <div className="study-options">
        {stydyOptions.map(({ title, description }) => (
          <div key={title} className="option">
            <div className="option-title">{title}</div>
            <div className="option-description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
