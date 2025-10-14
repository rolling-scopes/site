import classNames from 'classnames/bind';

import { MerchCatalog } from './merch-catalog/merch-catalog';
import NoMerch from './merch-catalog/no-merch/no-merch';
import { MerchProduct, merchStore } from '@/entities/merch';

import styles from './merch-section.module.scss';

const cx = classNames.bind(styles);

export const MerchSection = async () => {
  const products: MerchProduct[] = await merchStore.loadMerchCatalog();
  const allTags: string[] = products.flatMap((product) => product.tags).filter((tag) => tag.length);
  const uniqueTags: string[] = Array.from(new Set(allTags)).sort();

  return (
    <section className={cx('container')}>
      {(!products || products.length === 0) && <NoMerch />}

      {products?.length > 0 && (
        <div className={cx('content', 'merch-catalog')}>
          <MerchCatalog initialProducts={products} initialAvailableTags={uniqueTags} />
        </div>
      )}
    </section>
  );
};
