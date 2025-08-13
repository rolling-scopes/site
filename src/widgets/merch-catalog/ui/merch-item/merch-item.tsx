import classNames from 'classnames/bind';
import Image from 'next/image';

import { MerchProduct } from '@/entities/merch/types';
import downloadImg from '@/shared/assets/svg/download.svg';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-item.module.scss';

export const cx = classNames.bind(styles);

export const MerchItem = ({ title, preview, download }: MerchProduct) => {
  return (
    <article className={cx('merch-item')} data-testid="merch">
      <div className={cx('preview-wrap')}>
        <img
          className={cx('preview')}
          src={`https://cdn.rs.school/${preview[0] || ''}`}
          alt={title}
        />
        <LinkCustom
          href={`https://cdn.rs.school/${download[0] || ''}`}
          className={cx('download')}
          download
        >
          <Image src={downloadImg} alt="download link" className={cx('download-img')} />
        </LinkCustom>
      </div>
      <div className={cx('info-wrap')}>
        <Paragraph fontSize="medium">{title}</Paragraph>
      </div>
    </article>
  );
};
