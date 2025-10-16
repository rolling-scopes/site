'use client';

import { useMemo } from 'react';
import classNames from 'classnames/bind';
import { useSearchParams } from 'next/navigation';

import { MerchFilter } from './merch-filter/merch-filter';
import { MerchList } from './merch-list/merch-list';
import { MerchProductsProps } from './types';
import { getTags } from '../../helpers/get-tags';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = ({ initialProducts }: MerchProductsProps) => {
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('search') || '';
  const selectedTypes = searchParams.getAll('type');

  const tags = getTags(initialProducts);

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

  return (
    <div className={cx('merch-catalog-wrapper')}>
      <div className={cx('filters')}>
        <MerchFilter allTags={tags} />
      </div>
      {filteredProducts.length
        ? (
            <MerchList products={filteredProducts} />
          )
        : (
            <Paragraph>No merch found. Please try another filter or search term</Paragraph>
          )}
    </div>
  );
};
