import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import styles from './marquee-item.module.scss';

const cx = classNames.bind(styles);

export const MarqueeItem = ({ children }: PropsWithChildren) => {
  return (
    <span className={cx('place-container')}>
      <span className={cx('place')}>{children}</span>
      <span className={cx('divider')} data-testid="divider">
        *
      </span>
    </span>
  );
};
