import { ReactNode } from 'react';
import classnames from 'classnames/bind';

import styles from './principle-card.module.scss';

const cx = classnames.bind(styles);

export interface PrincipleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const PrincipleCard = ({ title, description, icon }: PrincipleCardProps) => (
  <div className={cx('principle-card')}>
    <div className={cx('card-header')}>
      <div className={cx('icon-wrapper')}>
        <div className={cx('accent')} />
        <span>{icon}</span>
      </div>
      <div className={cx('card-title')}>{title}</div>
    </div>
    <div className={cx('card-description')}>{description}</div>
    <div className={cx('accent-corner')} />
  </div>
);
