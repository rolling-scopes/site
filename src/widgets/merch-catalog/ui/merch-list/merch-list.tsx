'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useRouter, useSearchParams } from 'next/navigation';

import { MerchItem } from '../merch-item/merch-item';
import { Pagination } from '../pagination/pagination';
import { MerchProduct } from '@/entities/merch/types';

import styles from './merch-list.module.scss';

const cx = classNames.bind(styles);

export type MerchListProps = {
  products: MerchProduct[];
};

const ITEMS_PER_PAGE = 10;

export const MerchList = ({ products }: MerchListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(parseInt(pageParam || '1', 10));
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Sync URL with current page
  useEffect(() => {
    const newPage = parseInt(pageParam || '1', 10);

    if (newPage > totalPages || newPage < 1) {
      setCurrentPage(1);
      router.push(`?page=1`);
    }
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [pageParam]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    setCurrentPage(page);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('list')}>
        {currentProducts.map((product) => (
          <MerchItem key={product.id} {...product} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
