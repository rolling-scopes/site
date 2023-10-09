import React from 'react';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';

import image from '../../assets/community-welcome.png';

import './RSCommunity.scss';

export const Community: React.FC = () => (
  <div className="community container">
    <div className="community content">
      <div className="info">
        <Title text="Join RS Community" asterix={false} extra={true} />
        <Subtitle text="If you want to learn coding or be a RS School mentor, speaking at developers meetups and conferences or taking part in RS clubs welcome to the Rolling Scopes community! Join us in social networks to be in touch!" />
      </div>
      <img className="right picture" src={image} alt="community-welcome" />
    </div>
  </div>
);
