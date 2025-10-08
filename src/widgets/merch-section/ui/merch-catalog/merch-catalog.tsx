'use client';

import { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { DesktopMerchFilters } from './layouts/desktop-merch-filters/desktop-merch-filters';
import { MobileMerchFilters } from './layouts/mobile-merch-filters/mobile-merch-filters';
import SearchFilters from './merch-filters/search-filters/search-filters';
import TagFilters from './merch-filters/tag-filters/tag-filters';
import { MerchList } from './merch-list/merch-list';
import { MerchProductsProps } from './types';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = ({ initialProducts, initialAvailableTags }: MerchProductsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('search') || '';
  const selectedTypes = searchParams.getAll('type');

  const allAvailableTags = initialAvailableTags ?? [];
  const [areTabletFiltersExpanded, setAreTabletFiltersExpanded] = useState(false);

  const updateUrl = useCallback(
    (currentSearchTerm: string, currentSelectedTypes: string[]) => {
      const params = new URLSearchParams();

      if (currentSearchTerm) {
        params.set('search', currentSearchTerm);
      }
      currentSelectedTypes.forEach((type) => {
        params.append('type', type);
      });

      const queryString = params.toString();

      router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    },
    [pathname, router],
  );

  const filteredProducts = useMemo(() => {
    let productsToFilter = initialProducts || [];
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!Array.isArray(productsToFilter)) {
      productsToFilter = [];
    }

    if (normalizedSearchTerm !== '') {
      productsToFilter = productsToFilter.filter((product) =>
        product.title.toLowerCase().includes(normalizedSearchTerm),
      );
    }

    if (selectedTypes.length > 0) {
      productsToFilter = productsToFilter.filter((product) =>
        selectedTypes.some((typeValue) => (product.tags || []).includes(typeValue)),
      );
    }
    return productsToFilter;
  }, [initialProducts, searchTerm, selectedTypes]);

  const handleSearchChange = (newSearchTerm: string) => {
    updateUrl(newSearchTerm, selectedTypes);
  };

  const handleTypeChange = (typeValue: string) => {
    const newSelectedTypes = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((t) => t !== typeValue)
      : [...selectedTypes, typeValue];

    updateUrl(searchTerm, newSelectedTypes);
  };

  const handleClearFilters = () => {
    updateUrl('', []);
  };

  const toggleTabletFiltersExpansion = () => {
    setAreTabletFiltersExpanded((prev) => !prev);
  };

  const hasActiveFilters = searchTerm.trim() !== '' || selectedTypes.length > 0;

  const renderContent = () => {
    if (filteredProducts.length > 0) {
      return <MerchList products={filteredProducts} />;
    } else {
      return <Paragraph>No merch found. Please try another filter or search term</Paragraph>;
    }
  };

  const commonControlProps = {
    hasActiveFilters: hasActiveFilters,
    onClearFilters: handleClearFilters,
    searchFilters: <SearchFilters searchTerm={searchTerm} onSearchChange={handleSearchChange} />,
    tagFilters: (
      <TagFilters
        allAvailableTags={allAvailableTags}
        selectedTags={selectedTypes}
        onTagChange={handleTypeChange}
      />
    ),
  };

  return (
    <div className={cx('merch-catalog-wrapper')}>
      <div className={cx('filters')}>
        <div className={cx('desktop-layout')}>
          <DesktopMerchFilters {...commonControlProps} />
        </div>

        <div className={cx('mobile-layout')}>
          <MobileMerchFilters
            {...commonControlProps}
            areTagsExpanded={areTabletFiltersExpanded}
            onToggleTagsExpansion={toggleTabletFiltersExpansion}
          />
        </div>
      </div>

      {renderContent()}
    </div>
  );
};
