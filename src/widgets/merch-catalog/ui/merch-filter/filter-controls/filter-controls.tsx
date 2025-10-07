import classNames from 'classnames/bind';

import { FilterControlsProps } from '../types';
import { DesktopMerchFilters } from './layouts/desktop-merch-filters/desktop-merch-filters';
import { MobileMerchFilter } from './layouts/mobile-merch-filters/mobile-merch-filters';

import styles from './filter-controls.module.scss';

const cx = classNames.bind(styles);

export const FilterControls = (props: FilterControlsProps) => {
  return (
    <div className={cx('filter-container')}>
      <div className={cx('desktop-layout')}>
        <DesktopMerchFilters {...props} />
      </div>

      <div className={cx('mobile-layout')}>
        <MobileMerchFilter {...props} />
      </div>
    </div>
  );
};
