import classNames from 'classnames/bind';
import Image from 'next/image';

import { FilteredMerchView } from './merch-filter/filtered-catalog/filtered-catalog';
import { MerchProduct, merchStore } from '@/entities/merch';
import notFoundImg from '@/shared/assets/404.webp';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-catalog.module.scss';

const cx = classNames.bind(styles);

export const MerchCatalog = async () => {
  const products: MerchProduct[] = await merchStore.loadMerchCatalog();

  const allTags: string[] = products.flatMap((product) => product.tags || []);
  const uniqueTags: string[] = Array.from(new Set(allTags.filter(Boolean))).sort();

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

      {products?.length > 0 && (
        <div className={cx('content', 'merch-catalog')}>
          <FilteredMerchView initialProducts={products} initialAvailableTags={uniqueTags} />
        </div>
      )}
    </section>
  );
};
