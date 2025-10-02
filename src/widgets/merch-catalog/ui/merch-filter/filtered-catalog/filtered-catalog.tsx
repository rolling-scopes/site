'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MerchList } from '../../merch-list/merch-list';
import { FilterControls } from '../filter-controls/filter-controls';
import { FilteredMerchViewProps } from '../types';
import notFoundImg from '@/shared/assets/404.webp';
import { useMediaQuery } from '@/shared/hooks/use-media-query/use-media-query';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './filtered-catalog.module.scss';

const cx = classNames.bind(styles);

const TABLET_BREAKPOINT_PX = 1024;

export const FilteredMerchView = ({
  initialProducts,
  initialAvailableTags,
}: FilteredMerchViewProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('search') || '';
  const selectedTypes = searchParams.getAll('type');

  const allAvailableTags = initialAvailableTags ?? [];
  const isTabletLayout = useMediaQuery(`(max-width: ${TABLET_BREAKPOINT_PX}px)`);
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

    if (!Array.isArray(productsToFilter)) {
      productsToFilter = [];
    }

    if (searchTerm.trim() !== '') {
      productsToFilter = productsToFilter.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
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
    setAreTabletFiltersExpanded(!areTabletFiltersExpanded);
  };

  useEffect(() => {
    if (!isTabletLayout && areTabletFiltersExpanded) {
      setAreTabletFiltersExpanded(false);
    }
  }, [isTabletLayout, areTabletFiltersExpanded]);

  const hasActiveFilters = searchTerm.trim() !== '' || selectedTypes.length > 0;

  const renderContent = () => {
    if (!initialProducts || initialProducts.length === 0) {
      return (
        <div className={cx('empty-wrapper')}>
          <Image className={cx('empty-image')} src={notFoundImg} alt="No merchandise available" />

          <Paragraph className={cx('empty-paragraph')}>
            No merchandise available at this time.
          </Paragraph>
        </div>
      );
    }

    if (filteredProducts.length > 0) {
      return <MerchList products={filteredProducts} />;
    }

    if (filteredProducts.length === 0 && hasActiveFilters) {
      return <Paragraph>No merch found. Please try another filter or search term</Paragraph>;
    }

    return null;
  };

  return (
    <div className={cx('filter-catalog')}>
      <div className={cx('filter-sidebar')}>
        <FilterControls
          allAvailableTags={allAvailableTags}
          searchTerm={searchTerm}
          selectedTags={selectedTypes}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={handleSearchChange}
          onTagChange={handleTypeChange}
          onClearFilters={handleClearFilters}
          isTabletLayout={isTabletLayout}
          areTagsExpandedTablet={areTabletFiltersExpanded}
          onToggleTagsExpansionTablet={toggleTabletFiltersExpansion}
        />
      </div>
      {renderContent()}
    </div>
  );
};
