import classNames from 'classnames/bind';
import Image from 'next/image';

import { LayoutMobileProps } from '../../types';
import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';

import styles from '../layouts.module.scss';

const cx = classNames.bind(styles);

export const MobileMerchFilters = ({
  hasActiveFilters,
  onClearFilters,
  areTagsExpanded,
  onToggleTagsExpansion,
  searchFilters,
  tagFilters,
}: LayoutMobileProps) => {
  return (
    <div className={cx('filters-wrapper')}>
      <div className={cx('tablet-filters-wrapper')}>
        {searchFilters}
        {hasActiveFilters && (
          <button className={cx('button', 'secondary', 'active')} onClick={onClearFilters}>
            Clear
          </button>
        )}
      </div>

      <div className={cx('tags-accordion')}>
        <button
          className={cx('tablet-toggle-button', { expanded: areTagsExpanded })}
          onClick={onToggleTagsExpansion}
          aria-expanded={areTagsExpanded}
        >
          Filter By:
          <Image
            src={DropdownArrow}
            alt=""
            className={cx('filter-toggle-arrow', { rotate: areTagsExpanded })}
          />
        </button>

        {areTagsExpanded && tagFilters}
      </div>
    </div>
  );
};
