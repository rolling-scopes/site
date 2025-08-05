'use client';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { getPaginationItems } from '../utils/pagination.utils';
import chevronLeft from '@/shared/assets/svg/chevron-left.svg';
import chevronRight from '@/shared/assets/svg/chevron-right.svg';

import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const lastPage = totalPages;

  const handlePageChangeBack = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageChangeNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={cx('pagination')}>
      <button
        className={cx('pagination-button', 'arrow')}
        onClick={() => handlePageChangeBack()}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <Image
          src={chevronLeft}
          width={15}
          height={15}
          alt="chevron"
        />
      </button>
      {getPaginationItems(currentPage, totalPages).map((item, idx) =>
        item === 'dots'
          ? (
              <div key={`dots-${idx}`} className={cx('pagination-dots')}>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
                <span className={cx('dot')}></span>
              </div>
            )
          : (
              <button
                key={item}
                className={cx('pagination-button', { active: currentPage === item })}
                onClick={() => onPageChange(item as number)}
              >
                {item}
              </button>
            ),
      )}
      <button
        className={cx('pagination-button', 'arrow')}
        onClick={() => handlePageChangeNext()}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <Image
          src={chevronRight}
          width={15}
          height={15}
          alt="chevron"
        />
      </button>
    </div>
  );
};
