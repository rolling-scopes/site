import classNames from 'classnames/bind';
import Image from 'next/image';

import { FilterControlsProps } from '../types';
import SearchInput from './search-input/search-input';
import TagFilters from './tag-filters/tag-filters';
import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';

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
  isTabletLayout = false,
  areTagsExpandedTablet = false,
  onToggleTagsExpansionTablet,
}: FilterControlsProps) => {
  const showTagsSection = !isTabletLayout || areTagsExpandedTablet;

  return (
    <div className={cx('filter-container', { tablet: isTabletLayout })}>
      {!isTabletLayout && (
        <div className={cx('filter-title-wrapper')}>
          <h4 className={cx('filter-title')}>Filter merch</h4>
          <button
            className={cx('button', 'secondary', { active: hasActiveFilters })}
            onClick={onClearFilters}
          >
            Clear
          </button>
        </div>
      )}

      <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />

      {isTabletLayout && (
        <button
          id="merch-filter-toggle"
          className={cx('tablet-toggle-button', { expanded: areTagsExpandedTablet })}
          onClick={onToggleTagsExpansionTablet}
          aria-expanded={areTagsExpandedTablet}
          aria-controls="merch-filter-tags"
        >
          Filter By:
          {hasActiveFilters && !areTagsExpandedTablet && <span></span>}
          <span className={cx('filter-toggle-arrow', { expanded: areTagsExpandedTablet })}>
            <Image src={DropdownArrow} alt="dropdown-arrow" aria-label="dropdown-arrow" />
          </span>
        </button>
      )}
      {showTagsSection && allAvailableTags && allAvailableTags.length > 0 && (
        <>
          {isTabletLayout && (
            <button
              className={cx('button', 'secondary', { active: hasActiveFilters })}
              onClick={onClearFilters}
            >
              Clear
            </button>
          )}
          <TagFilters
            allAvailableTags={allAvailableTags}
            selectedTags={selectedTags}
            onTagChange={onTagChange}
          />
        </>
      )}
    </div>
  );
};
