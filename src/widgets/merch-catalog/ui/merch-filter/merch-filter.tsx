import { useState } from 'react';
import classNames from 'classnames/bind';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MerchSearch } from './merch-search/merch-search';
import { MerchTags } from './merch-tags/merch-tags';
import { MerchTagsDropdown } from './merch-tags-dropdown/merch-tags-dropdown';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-filter.module.scss';

const cx = classNames.bind(styles);

type MerchTagsProps = {
  tags: string[];
};

export const MerchFilter = ({ tags }: MerchTagsProps) => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const searchTerm: string = (searchParams.get('search') || '').trim();
  const selectedTypes: string[] = searchParams.getAll('type');
  const isFiltered: boolean = !!(searchTerm || selectedTypes.length);

  const handleClearFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  const [areTagsOpen, setTagsOpen] = useState<boolean>(false);
  const toggleTagsDropdown = () => {
    setTagsOpen((prev) => !prev);
  };

  return (
    <div className={cx('merch-filter')}>
      <div className={cx('merch-filter-header')}>
        <Subtitle size="extra-small" weight="bold">
          Filter merch
        </Subtitle>
        <button
          type="button"
          className={cx('merch-filter-button', 'merch-filter-rounded', { active: isFiltered })}
          onClick={handleClearFilters}
          data-testid="clear-button"
        >
          Clear
        </button>
      </div>
      <MerchSearch />
      {tags.length > 0 && (
        <div className={cx('merch-filter-tags')}>
          <MerchTagsDropdown isOpen={areTagsOpen} onClick={toggleTagsDropdown} />
          <div className={cx('merch-filter-tags-list', { expanded: areTagsOpen })}>
            <MerchTags tags={tags} />
          </div>
        </div>
      )}
    </div>
  );
};
