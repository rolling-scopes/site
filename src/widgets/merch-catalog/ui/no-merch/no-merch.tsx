'use client';
import classNames from 'classnames/bind';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import notFoundImg from '@/shared/assets/404.webp';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './no-merch.module.scss';

const cx = classNames.bind(styles);

type NoMerchProps = {
  isFiltered?: boolean;
};

export const NoMerch = ({ isFiltered = false }: NoMerchProps) => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();

  const handleClearFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
    <div className={cx('no-merch')}>
      <Image
        className={cx('no-merch-image')}
        src={notFoundImg}
        alt={isFiltered ? 'No results found' : 'No merchandise available'}
      />
      {isFiltered
        ? (
            <Paragraph className={cx('no-merch-text')}>
              No merch found. Please try another filter or search term
            </Paragraph>
          )
        : (
            <Paragraph className={cx('no-merch-text')}>
              No merchandise available at this time.
            </Paragraph>
          )}
      <button
        type="button"
        className={cx('button', 'primary')}
        onClick={isFiltered ? handleClearFilters : () => router.back()}
      >
        {isFiltered ? 'Clear Filters' : 'Go Back'}
      </button>
    </div>
  );
};
