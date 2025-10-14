import classNames from 'classnames/bind';

import { MerchCatalog } from './merch-catalog/merch-catalog';
import NoMerch from './merch-catalog/no-merch/no-merch';
import { MerchProduct, merchStore } from '@/entities/merch';

import styles from './merch-section.module.scss';

const cx = classNames.bind(styles);

export const MerchSection = async () => {
  const products: MerchProduct[] | [] = await merchStore.loadMerchCatalog();

  return (
    <section className={cx('container')}>
      {(!products || products.length === 0) && <NoMerch />}

      {products?.length > 0 && (
        <div className={cx('content', 'merch-catalog')}>
          <MerchCatalog initialProducts={products} />
        </div>
      )}
    </section>
  );
};
