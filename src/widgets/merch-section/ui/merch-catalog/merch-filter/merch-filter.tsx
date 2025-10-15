import classNames from 'classnames/bind';

import { MerchFilterProps } from '../types';
import { TagToggleButton } from './tag-toggle-button/tag-toggle-button';
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
        <TagToggleButton isExpanded={areTagsExpanded} onClick={onToggleTagsExpansion} />
        <div className={cx('tags-list', { expanded: areTagsExpanded })}>{tagFilters}</div>
      </div>
    </div>
  );
};
