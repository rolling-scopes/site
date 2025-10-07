import classNames from 'classnames/bind';

import { FilterControlsProps } from '../../../types';
import SearchInput from '../../search-filters/search-filters';
import TagFilters from '../../tag-filters/tag-filters';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from '../layout.module.scss';

const cx = classNames.bind(styles);

export const DesktopMerchFilters = ({
  allAvailableTags,
  searchTerm,
  selectedTags,
  hasActiveFilters,
  onSearchChange,
  onTagChange,
  onClearFilters,
}: FilterControlsProps) => {
  return (
    <div className={cx('controls-wrapper')}>
      <div className={cx('desktop-actions-wrapper')}>
        <Subtitle size="extra-small" weight="bold">
          Filter merch
        </Subtitle>
        <button
          className={cx('button', 'secondary', { active: hasActiveFilters })}
          onClick={onClearFilters}
        >
          Clear
        </button>
      </div>

      <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />

      <TagFilters
        allAvailableTags={allAvailableTags}
        selectedTags={selectedTags}
        onTagChange={onTagChange}
      />
    </div>
  );
};
