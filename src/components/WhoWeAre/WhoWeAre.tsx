import React from 'react';
import image from '../../assets/whoWeAre.png';

import './WhoWeAre.css';

export const WhoWeAre: React.FC = () => {
  return (
    <div className="container">
      <div>
        <div>title</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <img src={image} alt="Logo" />
    </div>
  );
};
