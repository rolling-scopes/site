import React from 'react';

import './RSPlaces.scss';

const places = [
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

export const RSPlaces: React.FC = () => {
  return (
    <div className="places">
      {places.map((i) => (
        <>
          <div className="divider">*</div>
          <div className="place">{i}</div>
        </>
      ))}
    </div>
  );
};
