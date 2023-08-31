import React from 'react';
import image from '../../assets/map.png';

import './RSNumbers.css';

export const RSNumbers: React.FC = () => {
  return (
    <div className="numbers">
      <div className="container">
        <div />
        <div>
          <div className="title">The Rolling Scopes in numbers</div>
          <div className="subtitle">
            Everyone can discover our community, regardless of age, professional employment, or
            place of residence.
          </div>
          <div className="description">
            Developers from different companies and countries are connected to pass on your
            knowledge, enrich your network and just have fun.
          </div>
        </div>
      </div>
      <img className="map" src={image} alt="map" />
    </div>
  );
};
