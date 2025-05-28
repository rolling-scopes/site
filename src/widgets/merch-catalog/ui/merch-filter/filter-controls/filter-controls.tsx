import classNames from 'classnames/bind';

import { FilterControlsProps } from '../types';
import { DropdownArrow } from '@/shared/icons/dropdown-arrow';
import { SearchIcon } from '@/shared/icons/search-icon';

import styles from './filter-controls.module.scss';

const cx = classNames.bind(styles);

export const FilterControls = ({
  allAvailableTags,
  searchTerm,
  selectedTags,
  hasActiveFilters,
  onSearchChange,
  onTagChange,
  onClearFilters,
  isMobileLayout = false,
  areTagsExpandedMobile = false,
  onToggleTagsExpansionMobile,
}: FilterControlsProps) => {
  const showTagsSection = !isMobileLayout || areTagsExpandedMobile;

  return (
    <div className={cx('filter-container', { mobile: isMobileLayout })}>
      {!isMobileLayout && (
        <div className={cx('filter-title-wrapper')}>
          <h4 className={cx('filter-title')}>Filter merch</h4>
          <button
            className={cx('filter-clear-button', { active: hasActiveFilters })}
            onClick={onClearFilters}
          >
            Clear
          </button>
        </div>
      )}
      <div className={cx('filter-search-wrapper')}>
        <SearchIcon />
        <input
          className={cx('filter-search-input')}
          id="merch-search-input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {isMobileLayout && (
        <button
          className={cx('mobile-toggle-button', { expanded: areTagsExpandedMobile })}
          onClick={onToggleTagsExpansionMobile}
        >
          Filter By:
          {hasActiveFilters && !areTagsExpandedMobile && <span></span>}
          <span className={cx('filter-toggle-arrow', { expanded: areTagsExpandedMobile })}>
            <DropdownArrow />
          </span>
        </button>
      )}
      {showTagsSection && allAvailableTags && allAvailableTags.length > 0 && (
        <>
          {isMobileLayout && hasActiveFilters && (
            <button className={cx('mobile-clear-button')} onClick={onClearFilters}>
              Clear
            </button>
          )}
          <div className={cx('filter-tags-wrapper')}>
            {' '}
            {allAvailableTags.map((tag) => (
              <label
                key={tag}
                htmlFor={`tag-checkbox-${tag}`}
                className={cx('filter-tag-label', { selected: selectedTags.includes(tag) })}
              >
                <input
                  type="checkbox"
                  id={`tag-checkbox-${tag}`}
                  className={cx('filter-checkbox-original')}
                  checked={selectedTags.includes(tag)}
                  onChange={() => onTagChange(tag)}
                />
                <span className={cx('filter-checkbox-custom')}></span>
                <span>{tag}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
