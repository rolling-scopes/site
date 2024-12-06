import React from 'react';
import classNames from 'classnames/bind';
import { MarqueeGroup } from '@/widgets/places/ui/marquee-group/marquee-group';

import styles from './places.module.scss';

const cx = classNames.bind(styles);

export const Places = () => (
  <section className={cx('places', 'container')} data-testid="places">
    <div className={cx('places', 'content')}>
      <MarqueeGroup />
      <MarqueeGroup hidden />
      <MarqueeGroup hidden />
    </div>
  </section>
);
