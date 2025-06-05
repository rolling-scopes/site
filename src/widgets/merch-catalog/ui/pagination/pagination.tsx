'use client';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
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
    <div className={cx('pagination')}>
      <button
        className={cx('pagination-button', 'arrow')}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {getVisiblePages().map((page) => (
        <button
          key={page}
          className={cx('pagination-button', { active: currentPage === page })}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={cx('pagination-button', 'arrow')}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <span className={cx('total-pages')}>
        total number of pages:
        <b className={cx('total-pages-text')}>{totalPages}</b>
      </span>
    </div>
  );
};
