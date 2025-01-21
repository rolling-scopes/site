import classnames from 'classnames/bind';

import styles from './info-cell.module.scss';

const cx = classnames.bind(styles);

type InfoCellProps = {
  title: string;
  description: string;
  isMentorship?: boolean;
};

export const InfoCell = ({ title, description, isMentorship }: InfoCellProps) => {
  const [firstPart, secondPart] = title.split(' ');

  return (
    <article className={cx('info-cell', { 'info-cell-mentorship': isMentorship })}>
      <div className={cx('info-cell-number', { 'info-cell-number-mentorship': isMentorship })}>
        {firstPart}
        <br />
        {secondPart}
      </div>
      <div className={cx('info-cell-text', { 'info-cell-text-mentorship': isMentorship })}>
        {description}
      </div>
    </article>
  );
};
