import classNames from 'classnames/bind';

import { MerchItem } from '../merch-item/merch-item';
import { MerchProduct } from '@/entities/merch/types';

import styles from './merch-list.module.scss';

const cx = classNames.bind(styles);

export type MerchListProps = {
  products: MerchProduct[];
};
export const MerchList = ({ products }: MerchListProps) => (
  <div className={cx('wrapper')}>
    <div className={cx('list')}>
      {products.map((product) => (
        <MerchItem key={product.id} {...product} />
      ))}
    </div>
  </div>
);
