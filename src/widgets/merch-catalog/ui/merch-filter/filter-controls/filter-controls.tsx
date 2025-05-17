import classNames from 'classnames/bind';

import { FilterControlsProps } from '../types';
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
}: FilterControlsProps) => {
  return (
    <div className={cx('merch-filter')}>
      <div className={cx('filter-container')}>
        <div className={cx('filter-title-wrapper')}>
          <h4 className={cx('filter-title')}>Filter merch</h4>
          {hasActiveFilters && (
            <button className={cx('filter-clear-button')} onClick={onClearFilters}>
              Clear
            </button>
          )}
        </div>
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
        {allAvailableTags && allAvailableTags.length > 0 && (
          <div className={cx('filter-tags-wrapper')}>
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
                <span className={cx('tag-text')}>{tag}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
