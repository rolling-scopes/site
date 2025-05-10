'use client';

import { useState } from 'react';
import { Pagination } from 'antd';
import classNames from 'classnames/bind';

import { MerchItem } from '../merch-item/merch-item';
import { MerchProduct } from '@/entities/merch/types';

import styles from './merch-list.module.scss';

const cx = classNames.bind(styles);

export type MerchListProps = {
  products: MerchProduct[];
};

export const MerchList = ({ products }: MerchListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('list')}>
        {currentProducts.map((product) => (
          <MerchItem key={product.id} {...product} />
        ))}
      </div>
      <div className={cx('pagination')}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
