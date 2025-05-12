import classNames from 'classnames/bind';

import { MerchList } from './merch-list/merch-list';
import { merchStore } from '@/entities/merch';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = async () => {
  const products = await merchStore.loadMerchCatalog();

  return (
    <section className={cx('container')}>
      <div className={cx('content', 'merch-catalog')}>
        {products && <MerchList products={products} />}
      </div>
    </section>
  );
};
