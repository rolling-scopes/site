import classNames from 'classnames/bind';
import Image from 'next/image';

import { MerchCatalog } from './merch-catalog/merch-catalog';
import { MerchProduct, merchStore } from '@/entities/merch';
import notFoundImg from '@/shared/assets/404.webp';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-section.module.scss';

const cx = classNames.bind(styles);

export const MerchSection = async () => {
  const products: MerchProduct[] = await merchStore.loadMerchCatalog();

  const allTags: string[] = products.flatMap((product) => product.tags).filter((tag) => tag.length);
  const uniqueTags: string[] = Array.from(new Set(allTags)).sort();

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
          <MerchCatalog initialProducts={products} initialAvailableTags={uniqueTags} />
        </div>
      )}
    </section>
  );
};
