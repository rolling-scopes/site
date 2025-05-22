import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import styles from './list-item.module.scss';

export const cx = classNames.bind(styles);

export const ListItem = ({ children }: PropsWithChildren) => {
  return (
    <li className={cx('list-item')} data-testid="list">
      {children}
    </li>
  );
};
