'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MerchList } from '../../merch-list/merch-list';
import { FilterControls } from '../filter-controls/filter-controls';
import { FilteredMerchViewProps } from '../types';
import { useMediaQuery } from '@/shared/hooks/use-media-query/use-media-query';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './filtered-catalog.module.scss';

const cx = classNames.bind(styles);

export const FilteredMerchView = ({ initialProducts }: FilteredMerchViewProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [allAvailableTags, setAllAvailableTags] = useState<string[]>([]);
  const isMobileLayout = useMediaQuery('(max-width: 960px)');
  const [areMobileFiltersExpanded, setAreMobileFiltersExpanded] = useState(false);

  const [searchTerm, setSearchTerm] = useState(() => {
    return searchParams.get('search') || '';
  });

  const [selectedTypes, setSelectedTypes] = useState<string[]>(() => {
    return searchParams.getAll('type');
  });

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

  useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      const uniqueTags = Array.from(
        new Set(initialProducts.flatMap((product) => product.tags || []).filter((tag) => tag)),
      ).sort();

      setAllAvailableTags(uniqueTags);
    } else {
      setAllAvailableTags([]);
    }
  }, [initialProducts]);

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
    setSearchTerm(newSearchTerm);
    updateUrl(newSearchTerm, selectedTypes);
  };

  const handleTypeChange = (typeValue: string) => {
    const newSelectedTypes = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((t) => t !== typeValue)
      : [...selectedTypes, typeValue];

    setSelectedTypes(newSelectedTypes);
    updateUrl(searchTerm, newSelectedTypes);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
    updateUrl('', []);
  };

  const toggleMobileFiltersExpansion = () => {
    setAreMobileFiltersExpanded(!areMobileFiltersExpanded);
  };

  useEffect(() => {
    if (!isMobileLayout && areMobileFiltersExpanded) {
      setAreMobileFiltersExpanded(false);
    }
  }, [isMobileLayout, areMobileFiltersExpanded]);

  const hasActiveFilters = searchTerm.trim() !== '' || selectedTypes.length > 0;

  return (
    <div className={cx('filter-catalog')}>
      {' '}
      <div className={cx('filter-sidebar')}>
        <FilterControls
          allAvailableTags={allAvailableTags}
          searchTerm={searchTerm}
          selectedTags={selectedTypes}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={handleSearchChange}
          onTagChange={handleTypeChange}
          onClearFilters={handleClearFilters}
          isMobileLayout={isMobileLayout}
          areTagsExpandedMobile={areMobileFiltersExpanded}
          onToggleTagsExpansionMobile={toggleMobileFiltersExpansion}
        />
      </div>
      <>
        {filteredProducts.length > 0
          ? (
              <MerchList products={filteredProducts} />
            )
          : (
              <p>No merch found. Please try another filter or search term</p>
            )}

        {(!initialProducts || initialProducts.length === 0) && !hasActiveFilters && (
          <Paragraph>No merch found</Paragraph>
        )}
      </>
    </div>
  );
};
