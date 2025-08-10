import { CSSProperties } from 'react';
import classNames from 'classnames/bind';

import { WidgetTitle } from '@/shared/ui/widget-title';
import { MediaGridSectionData } from '@/widgets/media-grid/types';

import styles from './media-grid.module.scss';

const cx = classNames.bind(styles);

export const MediaGrid = ({
  title,
  description,
  media,
  numberOfColumns,
  removeItemsOnResponsive,
  rowGapPx,
}: MediaGridSectionData) => {
  const gridRowGap = rowGapPx ? `${rowGapPx}px` : undefined;

  return (
    <article className={cx('container')}>
      <section className={cx('content', 'media-grid')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>

        {description}

        <section
          className={cx('media-grid-list', { 'remove-items-on-responsive': removeItemsOnResponsive })}
          style={
            {
              '--grid-max-col-count': numberOfColumns,
              '--grid-row-gap': gridRowGap,
            } as CSSProperties
          }
        >
          {media}
        </section>
      </section>
    </article>
  );
};
