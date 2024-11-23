'use client';

import classNames from 'classnames/bind';
// @ts-expect-error no types
import Marquee from 'react-double-marquee';

import styles from './places.module.scss';

const cx = classNames.bind(styles);

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
  <div className={cx('places', 'container')} data-testid="places">
    <div className={cx('places', 'content')}>
      <Marquee direction="left" childMargin={0}>
        {places.map((place) => (
          <span key={place} className={cx('place-container')}>
            <span className={cx('place')}>{place}</span>
            <span className={cx('divider')} data-testid="divider">
              *
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  </div>
);
