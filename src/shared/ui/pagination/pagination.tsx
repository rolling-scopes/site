'use client';
import classNames from 'classnames/bind';

import { Button } from './pagination-button/button';
import { getPaginationItems } from './utils/pagination.utils';
import chevronLeft from '@/shared/assets/svg/chevron-left.svg';
import chevronRight from '@/shared/assets/svg/chevron-right.svg';

import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

type PaginationProps = {
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
      <Button
        variant="pagination-arrow"
        onClick={handlePageChangeBack}
        disabled={currentPage === 1}
        ariaLabel="Go to previous page"
        icon={{
          src: chevronLeft,
          alt: '',
          width: 15,
          height: 15,
        }}
      />
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
              <Button
                key={item}
                variant={currentPage === item ? 'pagination-active' : 'pagination'}
                onClick={() => onPageChange(item as number)}
              >
                {item}
              </Button>
            ),
      )}
      <Button
        variant="pagination-arrow"
        onClick={handlePageChangeNext}
        disabled={currentPage === totalPages}
        ariaLabel="Go to next page"
        icon={{
          src: chevronRight,
          alt: '',
          width: 15,
          height: 15,
        }}
      />
    </div>
  );
};
