'use client';

import { useMemo } from 'react';
import classNames from 'classnames/bind';
import { useSearchParams } from 'next/navigation';

import { getTags } from '../helpers/get-tags';
import { MerchProductsProps } from '../types';
import { MerchFilter } from './merch-filter/merch-filter';
import { MerchList } from './merch-list/merch-list';
import { NoMerch } from './no-merch/no-merch';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = ({ allProducts }: MerchProductsProps) => {
  const searchParams = useSearchParams();

  const searchTerm = (searchParams.get('search') || '').trim().toLowerCase();
  const selectedTypes = searchParams.getAll('type');
  const isFiltered = searchTerm !== '' || selectedTypes.length > 0;

  const tags = getTags(allProducts);

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        if (!searchTerm) {
          return true;
        }
        const titleMatch = product.title.toLowerCase().includes(searchTerm);
        const tagsMatch = (product.tags || []).some((tag) =>
          tag.toLowerCase().includes(searchTerm),
        );

        return titleMatch || tagsMatch;
      })
      .filter((product) => {
        if (selectedTypes.length === 0) {
          return true;
        }
        return selectedTypes.some((type) => (product.tags || []).includes(type));
      });
  }, [allProducts, searchTerm, selectedTypes]);

  return (
    <div className={cx('content', 'merch-catalog-wrapper')}>
      <div className={cx('filters')}>
        <MerchFilter allTags={tags} />
      </div>
      {filteredProducts.length
        ? (
            <MerchList products={filteredProducts} />
          )
        : (
            <NoMerch isFiltered={isFiltered} />
          )}
    </div>
  );
};
