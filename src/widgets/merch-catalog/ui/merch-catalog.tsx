import { Suspense } from 'react';
import classNames from 'classnames/bind';

import { Loading } from './loading/loading';
import { MerchList } from './merch-list/merch-list';
import { getMerchData } from '@/entities/merch/api/merch-api';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = async () => {
  const products = await getMerchData();

  return (
    <section className={cx('container')}>
      <div className={cx('content', 'merch-catalog')}>
        <Suspense fallback={<Loading />}>
          <MerchList products={products} />
        </Suspense>
      </div>
    </section>
  );
};
