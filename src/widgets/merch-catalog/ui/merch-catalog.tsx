import classNames from 'classnames/bind';

import { FilteredMerchView } from './merch-filter/filtered-catalog/filtered-catalog';
import { MerchProduct, merchStore } from '@/entities/merch';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = async () => {
  const products: MerchProduct[] = await merchStore.loadMerchCatalog();

  const allTags: string[] = products.flatMap((product) => product.tags || []);
  const uniqueTags: string[] = Array.from(new Set(allTags.filter(Boolean))).sort();

  return (
    <section className={cx('container')}>
      <div className={cx('content', 'merch-catalog')}>
        <FilteredMerchView initialProducts={products} initialAvailableTags={uniqueTags} />
      </div>
    </section>
  );
};
