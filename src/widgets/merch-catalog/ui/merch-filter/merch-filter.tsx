import { useState } from 'react';
import classNames from 'classnames/bind';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MerchSearch } from './merch-search/merch-search';
import { MerchTags } from './merch-tags/merch-tags';
import { MerchTagsDropdown } from './merch-tags-dropdown/merch-tags-dropdown';
import { URL_PARAMS } from '@/shared/constants';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-filter.module.scss';

const cx = classNames.bind(styles);

type MerchTagsProps = {
  tags: string[];
};

export const MerchFilter = ({ tags }: MerchTagsProps) => {
  const router = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const searchTerm: string = (searchParams.get(URL_PARAMS.SEARCH) || '').trim();
  const selectedTypes: string[] = searchParams.getAll(URL_PARAMS.TYPE);
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
        <Subtitle size="extra-small" weight="bold" data-testid="button-title">
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
          <div
            className={cx('merch-filter-tags-list', { expanded: areTagsOpen })}
            data-testid="tags-list-container"
          >
            <MerchTags tags={tags} />
          </div>
        </div>
      )}
    </div>
  );
};
