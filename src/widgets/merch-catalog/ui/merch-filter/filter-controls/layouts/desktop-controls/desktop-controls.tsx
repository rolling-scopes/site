import classNames from 'classnames/bind';

import { FilterControlsProps } from '../../../types';
import SearchInput from '../../search-input/search-input';
import TagFilters from '../../tag-filters/tag-filters';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from '../../filter-controls.module.scss';

const cx = classNames.bind(styles);

type DesktopFilterControlsProps = Omit<
  FilterControlsProps,
  'isTabletLayout' | 'areTagsExpandedTablet' | 'onToggleTagsExpansionTablet'
>;

export const DesktopFilterControls = ({
  allAvailableTags,
  searchTerm,
  selectedTags,
  hasActiveFilters,
  onSearchChange,
  onTagChange,
  onClearFilters,
}: DesktopFilterControlsProps) => {
  return (
    <>
      <div className={cx('filter-title-wrapper')}>
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
    </>
  );
};
