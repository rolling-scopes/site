'use client';

import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';

import { MerchList } from '../../merch-list/merch-list';
import { FilterControls } from '../filter-controls/filter-controls';
import { FilteredMerchViewProps } from '../types';
import { useMediaQuery } from '@/shared/hooks/use-media-query/use-media-query';

import styles from './filtered-catalog.module.scss';

const cx = classNames.bind(styles);

export const FilteredMerchView = ({ initialProducts }: FilteredMerchViewProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allAvailableTags, setAllAvailableTags] = useState<string[]>([]);

  const isMobileLayout = useMediaQuery('(max-width: 960px)');
  const [areMobileFiltersExpanded, setAreMobileFiltersExpanded] = useState(false);

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

    if (searchTerm.trim() !== '') {
      productsToFilter = productsToFilter.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (selectedTags.length > 0) {
      productsToFilter = productsToFilter.filter((product) =>
        selectedTags.some((tag) => (product.tags || []).includes(tag)),
      );
    }
    return productsToFilter;
  }, [initialProducts, searchTerm, selectedTags]);

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag],
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  const toggleMobileFiltersExpansion = () => {
    setAreMobileFiltersExpanded(!areMobileFiltersExpanded);
  };

  useEffect(() => {
    if (!isMobileLayout && areMobileFiltersExpanded) {
      setAreMobileFiltersExpanded(false);
    }
  }, [isMobileLayout, areMobileFiltersExpanded]);

  const hasActiveFilters = searchTerm.trim() !== '' || selectedTags.length > 0;

  return (
    <div className={cx('filter-catalog')}>
      {' '}
      <div className={cx('filter-sidebar')}>
        <FilterControls
          allAvailableTags={allAvailableTags}
          searchTerm={searchTerm}
          selectedTags={selectedTags}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={handleSearchChange}
          onTagChange={handleTagChange}
          onClearFilters={handleClearFilters}
          isMobileLayout={isMobileLayout}
          areTagsExpandedMobile={areMobileFiltersExpanded}
          onToggleTagsExpansionMobile={toggleMobileFiltersExpansion}
        />
      </div>
      <main>
        {filteredProducts.length > 0
          ? (
              <MerchList products={filteredProducts} />
            )
          : (
              <p>No merch found. Please try another filter or search term</p>
            )}

        {(!initialProducts || initialProducts.length === 0) && !hasActiveFilters && (
          <p>No merch found.</p>
        )}
      </main>
    </div>
  );
};
