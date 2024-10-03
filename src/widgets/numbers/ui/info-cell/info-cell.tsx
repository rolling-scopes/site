import classnames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './info-cell.module.scss';

const cx = classnames.bind(styles);

type InfoCellProps = {
  title: string;
  description: string;
};

export const InfoCell = ({ title, description }: InfoCellProps) => (
  <article className={cx('info-cell')}>
    <WidgetTitle size="large" className={cx('info-cell-number')}>
      {title}
    </WidgetTitle>
    <Paragraph fontSize="medium" className={cx('info-cell-text')}>
      {description}
    </Paragraph>
  </article>
);
