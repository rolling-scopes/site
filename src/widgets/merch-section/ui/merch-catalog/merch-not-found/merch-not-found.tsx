import classNames from 'classnames/bind';
import Image from 'next/image';

import notFoundImg from '@/shared/assets/404.webp';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-not-found.module.scss';

const cx = classNames.bind(styles);

const MerchNotFound = () => {
  return (
    <div className={cx('content', 'merch-not-found')}>
      <Image
        className={cx('merch-not-found-image')}
        src={notFoundImg}
        alt="No merchandise available"
      />
      <Paragraph className={cx('merch-not-found-text')}>
        No merchandise available at this time.
      </Paragraph>
    </div>
  );
};

export default MerchNotFound;
