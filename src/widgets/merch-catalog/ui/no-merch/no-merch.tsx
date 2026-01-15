import classNames from 'classnames/bind';
import Image from 'next/image';

import noResultImg from '@/shared/assets/no-result.webp';
import { ROUTES } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './no-merch.module.scss';

const cx = classNames.bind(styles);

type NoMerchProps = {
  isFiltered?: boolean;
};

export const NoMerch = ({ isFiltered = false }: NoMerchProps) => {
  return (
    <div className={cx('no-merch')}>
      <Image
        className={cx('no-merch-image')}
        src={noResultImg}
        alt={isFiltered ? 'No results found' : 'No merchandise available'}
        data-testid="no-merch-image"
        width={304}
        height={316}
      />
      <Paragraph className={cx('no-merch-text')} data-testid="no-merch-text">
        {isFiltered
          ? 'No merch found. Please try another filter or search term'
          : 'No merchandise available at this time'}
      </Paragraph>

      <LinkCustom
        variant="primary"
        href={ROUTES.HOME}
        iconRight={null}
        data-testid="no-merch-home-link"
      >
        Home
      </LinkCustom>
    </div>
  );
};
