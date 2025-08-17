'use client';

import { CSSProperties, useState } from 'react';
import classNames from 'classnames/bind';

import { defaultGridColGapPx } from '@/widgets/media-grid/constants';
import { MediaGridSectionData } from '@/widgets/media-grid/types';

import styles from './media-grid.module.scss';

const cx = classNames.bind(styles);

export const MediaGrid = ({
  fitContent,
  children,
  numberOfColumns,
  removeItemsOnResponsive,
  rowGapPx,
  colGapPx,
}: MediaGridSectionData) => {
  const [minGridColSize, setMinGridColSize] = useState<number>();

  const gridRowGapPx = Number.isFinite(rowGapPx) ? `${rowGapPx}px` : undefined;
  const gridColGapPx = Number.isFinite(colGapPx) ? `${colGapPx}px` : defaultGridColGapPx;
  const minColSizePx = minGridColSize ? `${minGridColSize}px` : undefined;

  const handleDefineMinGridColSize = (node: HTMLElement | null) => {
    const childWidth = node?.firstElementChild?.clientWidth;

    if (childWidth) {
      setMinGridColSize(childWidth);
    }
  };

  return (
    <article className={cx('container')}>
      <div
        ref={handleDefineMinGridColSize}
        className={cx('media-grid-list', {
          'remove-items-on-responsive': removeItemsOnResponsive,
          'fit-content': fitContent,
        })}
        style={
          {
            '--grid-max-col-count': numberOfColumns,
            '--grid-col-gap': gridColGapPx,
            '--grid-row-gap': gridRowGapPx,
            '--grid-min-col-size': minColSizePx,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </article>
  );
};
