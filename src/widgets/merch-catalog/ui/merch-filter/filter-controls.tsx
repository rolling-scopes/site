import classNames from 'classnames/bind';

import { SearchIcon } from '@/shared/icons/search-icon';

import styles from './filter-controls.module.scss';

const cx = classNames.bind(styles);

export const FilterControls = () => {
  return (
    <div className={cx('merch-filter')}>
      <div className={cx('filter-container')}>
        <div className={cx('filter-title-wrapper')}>
          <h4 className={cx('filter-title')}>Filter merch</h4>
          <button className={cx('filter-clear-button')}>Clear</button>
        </div>
        <div className={cx('filter-search-wrapper')}>
          <SearchIcon />
          <input
            className={cx('filter-search-input')}
            id="merch-search-input"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};
