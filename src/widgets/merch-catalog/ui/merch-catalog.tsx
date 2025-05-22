import { Suspense } from 'react';
import classNames from 'classnames/bind';

import { FilteredMerchView } from './merch-filter/filtered-catalog/filtered-catalog';
import { merchStore } from '@/entities/merch';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = async () => {
  const products = (await merchStore.loadMerchCatalog()) || [];

  return (
    <section className={cx('container')}>
      <div className={cx('content', 'merch-catalog')}>
        <Suspense fallback={<LoadingFilters />}>
          {products && <FilteredMerchView initialProducts={products} />}
        </Suspense>
      </div>
    </section>
  );
};

const LoadingFilters = () => {
  return <div>Loading filters and products...</div>;
};
