import { useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MerchFilterProps } from '../types';
import MerchSearch from './merch-search/merch-search';
import MerchTags from './merch-tags/merch-tags';
import { MerchTagsToggle } from './merch-tags-toggle/merch-tags-toggle';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-filter.module.scss';

const cx = classNames.bind(styles);

export const MerchFilter = ({ allTags }: MerchFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('search') || '';
  const selectedTypes = searchParams.getAll('type');
  const isFiltered = searchTerm || selectedTypes.length;

  const handleClearFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  const [areTagsOpen, setTagsOpen] = useState(false);
  const toggleTagsDropdown = () => {
    setTagsOpen((prev) => !prev);
  };

  return (
    <div className={cx('merch-filter')}>
      <div className={cx('merch-filter-title')}>
        <Subtitle size="extra-small" weight="bold">
          Filter merch
        </Subtitle>
        <button
          type="button"
          className={cx('button', 'secondary', { active: isFiltered })}
          onClick={handleClearFilters}
        >
          Clear
        </button>
      </div>
      <MerchSearch />
      <div className={cx('tags')}>
        <MerchTagsToggle isOpen={areTagsOpen} onClick={toggleTagsDropdown} />
        <div className={cx('tags-list', { expanded: areTagsOpen })}>
          <MerchTags allTags={allTags} />
        </div>
      </div>
    </div>
  );
};
