import classNames from 'classnames/bind';
import Image from 'next/image';

import { MerchList } from './merch-list/merch-list';
import { merchStore } from '@/entities/merch';
import notFoundImg from '@/shared/assets/404.webp';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = async () => {
  const products = await merchStore.loadMerchCatalog();

  return (
    <section className={cx('container')}>
      {(!products || products.length === 0) && (
        <div className={cx('content', 'merch-catalog', 'empty-wrapper')}>
          <Image className={cx('empty-image')} src={notFoundImg} alt="No merchandise available" />
          <Paragraph className={cx('empty-paragraph')}>
            No merchandise available at this time.
          </Paragraph>
        </div>
      )}

      {products && products.length > 0 && (
        <div className={cx('content', 'merch-catalog')}>
          <MerchList products={products} />
        </div>
      )}
    </section>
  );
};
