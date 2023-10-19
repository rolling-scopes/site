import React from 'react';

// @ts-ignore
import Marquee from 'react-double-marquee';

import './Places.scss';

const places: string[] = [
  'Kazakhstan',
  'Belarus',
  'Latvia',
  'Poland',
  'Turkey',
  'Georgia',
  'Montenegro',
  'Uzbekistan',
  'Online',
  'Kyrgyzstan',
  'Lithuania'
];

export const Places: React.FC = () => {
  return (
    <div className="places container">
      <div className="places content">
        <Marquee direction="left">
          {places.map((i) => (
            <span key={i} className="place-container">
              <span className="place">{i}</span>
              <span className="divider">*</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
