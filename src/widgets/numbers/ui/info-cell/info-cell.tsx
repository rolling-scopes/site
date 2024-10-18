import classnames from 'classnames/bind';

import styles from './info-cell.module.scss';

const cx = classnames.bind(styles);

type InfoCellProps = {
  title: string;
  description: string;
};

export const InfoCell = ({ title, description }: InfoCellProps) => (
  <article className={cx('info-cell')}>
    <div className={cx('info-cell-number')}>{title}</div>
    <div className={cx('info-cell-text')}>{description}</div>
  </article>
);
