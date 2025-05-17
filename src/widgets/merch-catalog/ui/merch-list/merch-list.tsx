import classNames from 'classnames/bind';

import { MerchProduct } from '@/entities/merch/types';
import { MerchCard } from '@/entities/merch/ui/merch-card/merch-card';

import styles from './merch-list.module.scss';

const cx = classNames.bind(styles);

export type MerchListProps = {
  products: MerchProduct[];
};
export const MerchList = ({ products }: MerchListProps) => (
  <div className={cx('wrapper')}>
    <div className={cx('list')}>
      {products.map((product) => (
        <MerchCard key={product.id} {...product} />
      ))}
    </div>
  </div>
);
