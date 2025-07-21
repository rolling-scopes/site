'use client';
import classNames from 'classnames/bind';
import Image from 'next/image';

import chevronLeft from '../../../../shared/assets/svg/chevron-left.svg';
import chevronRight from '../../../../shared/assets/svg/chevron-right.svg';

import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPaginationItems = () => {
    const visiblePagesInLeftSection = 3;
    const visiblePagesInRightSection = 2;
    const pages: (number | 'dots')[] = [];

    // Calculate left group (sliding window of 3 pages)
    let leftEnd = Math.min(visiblePagesInLeftSection, totalPages);
    let leftStart = Math.max(1, Math.min(currentPage - 1, totalPages - visiblePagesInRightSection
      - visiblePagesInLeftSection + 1));

    leftEnd = Math.min(leftStart + visiblePagesInLeftSection - 1, totalPages - visiblePagesInRightSection);
    leftStart = Math.max(1, leftEnd - visiblePagesInLeftSection + 1);

    for (let i = leftStart; i <= leftEnd; i++) {
      pages.push(i);
    }

    // Add dots if there's a gap between left and right group
    if (leftEnd < totalPages - visiblePagesInRightSection) {
      pages.push('dots');
    }

    // Add right group (last 2 pages)
    for (let i = Math.max(totalPages - visiblePagesInRightSection + 1, leftEnd + 1); i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className={cx('pagination')}>
      <button
        className={cx('pagination-button', 'arrow')}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
      {getPaginationItems().map((item, idx) =>
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
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
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
