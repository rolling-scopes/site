import classNames from 'classnames/bind';
import Image from 'next/image';

import { FilterControlsProps } from '../../../types';
import SearchInput from '../../search-input/search-input';
import TagFilters from '../../tag-filters/tag-filters';
import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';

import styles from '../../filter-controls.module.scss';

const cx = classNames.bind(styles);

type MobileFilterControlsProps = FilterControlsProps;

export const MobileFilterControls = ({
  allAvailableTags,
  searchTerm,
  selectedTags,
  hasActiveFilters,
  onSearchChange,
  onTagChange,
  onClearFilters,
  areTagsExpandedTablet,
  onToggleTagsExpansionTablet,
}: MobileFilterControlsProps) => {
  const showTagsSection = areTagsExpandedTablet;

  return (
    <>
      <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />

      <div className={cx('tablet-actions-wrapper')}>
        <button
          id="merch-filter-toggle"
          className={cx('tablet-toggle-button', {
            'expanded': areTagsExpandedTablet,
            'has-active-filters': hasActiveFilters && !areTagsExpandedTablet,
          })}
          onClick={onToggleTagsExpansionTablet}
          aria-expanded={areTagsExpandedTablet}
          aria-controls="merch-filter-tags"
        >
          Filter By:
          <Image
            src={DropdownArrow}
            alt=""
            aria-label="dropdown-arrow"
            className={cx('filter-toggle-arrow')}
          />
        </button>

        {hasActiveFilters && (
          <button className={cx('button', 'secondary', 'active')} onClick={onClearFilters}>
            Clear
          </button>
        )}
      </div>

      {showTagsSection && (
        <TagFilters
          allAvailableTags={allAvailableTags}
          selectedTags={selectedTags}
          onTagChange={onTagChange}
        />
      )}
    </>
  );
};
