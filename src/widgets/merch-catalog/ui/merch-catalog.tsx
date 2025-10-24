'use client';

import { useMemo } from 'react';
import classNames from 'classnames/bind';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

import { getTags } from '../helpers/get-tags';
import { MerchFilter } from './merch-filter/merch-filter';
import { MerchList } from './merch-list/merch-list';
import { NoMerch } from './no-merch/no-merch';
import { filterBySearchTerm, filterByTypes } from '../helpers/filter-merch';
import { MerchProduct } from '@/entities/merch/types';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

type MerchProductsProps = {
  products: MerchProduct[];
};

export const MerchCatalog = ({ products }: MerchProductsProps) => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const searchTerm: string = searchParams.get('search') || '';
  const selectedTypes: string[] = searchParams.getAll('type');
  const isFiltered: boolean = !!(searchTerm || selectedTypes.length);
  const tags: string[] | [] = getTags(products);

  const filteredProducts: MerchProduct[] = useMemo(() => {
    console.log(searchTerm);
    const filteredByTypes = filterByTypes(products, selectedTypes);
    const filteredBySearch = filterBySearchTerm(filteredByTypes, searchTerm);

    return filteredBySearch;
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
