import React from 'react';
import { Title } from '../Title/Title';

import { Paragraph } from '../Paragraph/Paragraph';
import { Subtitle } from '../Subtitle/Subtitle';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

import image from '../../assets/merch.png';

import './Merch.scss';

export const Merch: React.FC = () => (
  <div className="merch container">
    <div className="merch content">
      <div className="info">
        <Tag text="merch" />
        <Title text="RS merch" asterix />
        <Subtitle text="Are you an RS sloth fan and looking for RS merch?" />
        <Paragraph>
          The wait is almost over as we're gearing up for the catalog of free web and print assets
          where you will find all merch collections and can print your own Rolling Scopes t-shirts,
          stickers etc.
        </Paragraph>
        <Button label="Discover merch assets" />
      </div>
      <img className="right picture" src={image} alt="speakers-wanted" />
    </div>
  </div>
);
