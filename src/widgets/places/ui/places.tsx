'use client';

import classNames from 'classnames/bind';

import styles from './places.module.scss';

const cx = classNames.bind(styles);

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
  'Lithuania',
] as const;

export const Places = () => (
  <div className={cx('places', 'container')} data-testid="places">
    <div className={cx('places', 'content')}>
      <div className={cx('marquee-group')}>
        {places.map((place) => (
          <span key={place} className={cx('place-container')}>
            <span className={cx('place')}>{place}</span>
            <span className={cx('divider')} data-testid="divider">
              *
            </span>
          </span>
        ))}
      </div>
      <div aria-hidden="true" className={cx('marquee-group')}>
        {places.map((place) => (
          <span key={place} className={cx('place-container')}>
            <span className={cx('place')}>{place}</span>
            <span className={cx('divider')} data-testid="divider">
              *
            </span>
          </span>
        ))}
      </div>
      <div aria-hidden="true" className={cx('marquee-group')}>
        {places.map((place) => (
          <span key={place} className={cx('place-container')}>
            <span className={cx('place')}>{place}</span>
            <span className={cx('divider')} data-testid="divider">
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  </div>
);
