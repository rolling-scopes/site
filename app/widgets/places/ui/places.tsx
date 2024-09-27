// @ts-expect-error no types
import Marquee from 'react-double-marquee';

import './places.scss';

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
  'Lithuania',
];

export const Places = () => (
  <div className="places container" data-testid="places">
    <div className="places content">
      <Marquee direction="left" childMargin={0}>
        {places.map((place) => (
          <span key={place} className="place-container">
            <span className="place">{place}</span>
            <span className="divider" data-testid="divider">
              *
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  </div>
);
