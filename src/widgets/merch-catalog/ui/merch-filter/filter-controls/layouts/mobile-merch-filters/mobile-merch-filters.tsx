import classNames from 'classnames/bind';
import Image from 'next/image';

import { FilterControlsProps } from '../../../types';
import SearchInput from '../../search-filters/search-filters';
import TagFilters from '../../tag-filters/tag-filters';
import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';

import styles from '../layout.module.scss';

const cx = classNames.bind(styles);

type MobileMerchFilterProps = FilterControlsProps;

export const MobileMerchFilter = ({
  allAvailableTags,
  searchTerm,
  selectedTags,
  hasActiveFilters,
  onSearchChange,
  onTagChange,
  onClearFilters,
  areTagsExpanded,
  onToggleTagsExpansion,
}: MobileMerchFilterProps) => {
  return (
    <div className={cx('controls-wrapper')}>
      <div className={cx('tablet-actions-wrapper')}>
        <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
        {hasActiveFilters && (
          <button className={cx('button', 'secondary', 'active')} onClick={onClearFilters}>
            Clear
          </button>
        )}
      </div>

      <div className={cx('filter-accordion')}>
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

        {areTagsExpanded && (
          <TagFilters
            allAvailableTags={allAvailableTags}
            selectedTags={selectedTags}
            onTagChange={onTagChange}
          />
        )}
      </div>
    </div>
  );
};
