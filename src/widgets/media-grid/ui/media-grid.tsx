import { CSSProperties } from 'react';
import classNames from 'classnames/bind';

import { MediaGridSectionData } from '@/widgets/media-grid/types';

import styles from './media-grid.module.scss';

const cx = classNames.bind(styles);

export const MediaGrid = ({
  children,
  numberOfColumns,
  removeItemsOnResponsive,
  rowGapPx,
}: MediaGridSectionData) => {
  const gridRowGap = rowGapPx ? `${rowGapPx}px` : undefined;

  return (
    <article className={cx('container')}>
      <section className={cx('media-grid')}>
        <section
          className={cx('media-grid-list', { 'remove-items-on-responsive': removeItemsOnResponsive })}
          style={
            {
              '--grid-max-col-count': numberOfColumns,
              '--grid-row-gap': gridRowGap,
            } as CSSProperties
          }
        >
          {children}
        </section>
      </section>
    </article>
  );
};
