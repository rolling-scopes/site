'use client';

import { useMemo } from 'react';
import classNames from 'classnames/bind';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

import { getTags } from '../helpers/get-tags';
import { MerchFilter } from './merch-filter/merch-filter';
import { MerchList } from './merch-list/merch-list';
import { NoMerch } from './no-merch/no-merch';
import { MerchProduct } from '@/entities/merch/types';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

type MerchProductsProps = {
  products: MerchProduct[];
};

export const MerchCatalog = ({ products }: MerchProductsProps) => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const searchTerm: string = (searchParams.get('search') || '').trim().toLowerCase();
  const selectedTypes: string[] = searchParams.getAll('type');
  const isFiltered: boolean = !!(searchTerm || selectedTypes.length);
  const tags: string[] | [] = getTags(products);

  const filteredProducts: MerchProduct[] | [] = useMemo(() => {
    return products
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
        if (!selectedTypes.length) {
          return true;
        }
        return selectedTypes.some((type) => (product.tags || []).includes(type));
      });
  }, [products, searchTerm, selectedTypes]);

  return (
    <div className={cx('merch-catalog', 'content')}>
      <div className={cx('merch-catalog-tags')}>
        <MerchFilter tags={tags} />
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
