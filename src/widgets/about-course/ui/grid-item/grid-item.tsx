import classNames from 'classnames/bind';
import Image from 'next/image';

import { Subtitle } from '@/shared/ui/subtitle';
import { GridItemData } from '@/widgets/about-course/types';

import styles from './grid-item.module.scss';

export const cx = classNames.bind(styles);

type GridItemProps = Omit<GridItemData, 'variant'>;

export const GridItem = ({ heading, content, icon }: GridItemProps) => {
  return (
    <article className={cx('grid-item')} data-testid="about-course-grid-item">
      <header className={cx('item-title')}>
        <Image
          className={cx('grid-icon')}
          src={icon}
          aria-hidden="true"
          alt=""
          data-testid="grid-icon"
        />

        <Subtitle size="extra-small">{heading}</Subtitle>
      </header>
      {content}
    </article>
  );
};
