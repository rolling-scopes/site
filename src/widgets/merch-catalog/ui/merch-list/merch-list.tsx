'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useRouter, useSearchParams } from 'next/navigation';

import { MerchItem } from '../merch-item/merch-item';
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

  // Set initial URL if no page parameter
  useEffect(() => {
    if (!pageParam) {
      const params = new URLSearchParams(searchParams.toString());

      params.set('page', '1');
      router.push(`?${params.toString()}`);
    }
  }, []);

  // Sync URL with current page
  useEffect(() => {
    const newPage = parseInt(pageParam || '1', 10);

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
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const visiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('list')}>
        {currentProducts.map((product) => (
          <MerchItem key={product.id} {...product} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={cx('pagination')}>
          <button
            className={cx('pagination-button', 'arrow')}
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {getVisiblePages().map((page) => (
            <button
              key={page}
              className={cx('pagination-button', { active: currentPage === page })}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={cx('pagination-button', 'arrow')}
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};
