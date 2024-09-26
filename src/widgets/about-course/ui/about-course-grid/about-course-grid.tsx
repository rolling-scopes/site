import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Image } from '@/shared/ui/image';

import styles from './about-course-grid.module.scss';

export const cx = classNames.bind(styles);

interface InfoGridProps {
  items: {
    id: number;
    title: string;
    info: string | ReactNode;
    icon: string;
  }[];
  hasTitle?: boolean;
}
// removed hasTitle props temp
export const InfoGrid = ({ items }: InfoGridProps) => {
  return (
    <div className={cx('about-grid')}>
      {items.map(({ id, title, info, icon }) => (
        <div key={id} className={cx('item')} data-testid="info-grid-item">
          <div className={cx('item-title')}>
            <Image src={icon} alt={title} />
            <h2>{title}</h2>
          </div>
          { typeof info === 'string' ? <p>{info}</p> : info }
        </div>
      ))}
    </div>
  );
};
