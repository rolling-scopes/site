import classNames from 'classnames/bind';
import Image from 'next/image';

import { MerchFilterProps } from '../types';
import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-filter.module.scss';

const cx = classNames.bind(styles);

export const MerchFilter = ({
  hasActiveFilters,
  onClearFilters,
  areTagsExpanded,
  onToggleTagsExpansion,
  searchFilters,
  tagFilters,
}: MerchFilterProps) => {
  return (
    <div className={cx('merch-filter')}>
      <div className={cx('merch-filter-title')}>
        <Subtitle size="extra-small" weight="bold">
          Filter merch
        </Subtitle>
        <button
          type="button"
          className={cx('button', 'secondary', { active: hasActiveFilters })}
          onClick={onClearFilters}
        >
          Clear
        </button>
      </div>
      {searchFilters}
      <div className={cx('tags')}>
        <button
          className={cx('tags-toggle')}
          onClick={onToggleTagsExpansion}
          aria-expanded={areTagsExpanded}
        >
          Filter By:
          <Image
            src={DropdownArrow}
            alt=""
            className={cx('tags-arrow', { rotate: areTagsExpanded })}
          />
        </button>
        <div className={cx('tags-list', { expanded: areTagsExpanded })}>{tagFilters}</div>
      </div>
    </div>
  );
};
