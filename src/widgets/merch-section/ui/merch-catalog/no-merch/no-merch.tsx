import classNames from 'classnames/bind';
import Image from 'next/image';

import notFoundImg from '@/shared/assets/404.webp';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './no-merch.module.scss';

const cx = classNames.bind(styles);

const NoMerch = () => {
  return (
    <div className={cx('content', 'no-merch')}>
      <Image className={cx('no-merch-image')} src={notFoundImg} alt="No merchandise available" />
      <Paragraph className={cx('no-merch-text')}>No merchandise available at this time.</Paragraph>
    </div>
  );
};

export default NoMerch;
