'use client';

import React from 'react';
import classNames from 'classnames/bind';
import PlaceItem from '../place-item/place-item';
import { places } from '@/widgets/places/constants';

import styles from './places.module.scss';

const cx = classNames.bind(styles);

export const Places = () => (
  <div className={cx('places', 'container')} data-testid="places">
    <div className={cx('places', 'content')}>
      <div className={cx('marquee-group')}>
        {places.map((place) => (
          <PlaceItem key={place}>{place}</PlaceItem>
        ))}
      </div>
      <div aria-hidden="true" className={cx('marquee-group')}>
        {places.map((place) => (
          <PlaceItem key={place}>{place}</PlaceItem>
        ))}
      </div>
      <div aria-hidden="true" className={cx('marquee-group')}>
        {places.map((place) => (
          <PlaceItem key={place}>{place}</PlaceItem>
        ))}
      </div>
    </div>
  </div>
);
