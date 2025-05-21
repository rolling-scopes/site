import classNames from 'classnames/bind';
import Image from 'next/image';

import { GridItem as TGridItem } from '@/entities/course/types';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './grid-item.module.scss';

export const cx = classNames.bind(styles);

export const GridItem = ({ heading, content, icon }: TGridItem) => {
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

        <Subtitle fontSize="extra-small">{heading}</Subtitle>
      </header>
      {content}
    </article>
  );
};
