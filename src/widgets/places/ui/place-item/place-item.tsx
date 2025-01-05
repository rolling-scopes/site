import classNames from 'classnames/bind';
import React, { PropsWithChildren } from 'react';

import styles from './place-item.module.scss';

const cx = classNames.bind(styles);

const PlaceItem = ({ children }: PropsWithChildren) => {
  return (
    <span className={cx('place-container')}>
      <span className={cx('place')}>{children}</span>
      <span className={cx('divider')} data-testid="divider">
        *
      </span>
    </span>
  );
};

export default PlaceItem;
