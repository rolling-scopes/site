import React from 'react';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';

import image from '../../assets/support.png';

import './Support.scss';
import { Button } from '../Button/Button';

export const Support: React.FC = () => (
  <div className="support container">
    <div className="support content">
      <div className="info">
        <Title text="Support Us" asterix={false} extra={true} />
        <Subtitle text="Your donations help us cover hosting, domains, licenses, and advertising for courses and events. Every donation, big or small, helps!" />
        <Subtitle text="Thank you for your support!" />
        <Button label="Donate now" />
      </div>
      <img className="right picture" src={image} alt="support-us" />
    </div>
  </div>
);
