import classNames from 'classnames/bind';

import { MerchProduct } from '@/entities/merch/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-item.module.scss';

export const cx = classNames.bind(styles);

export const MerchItem = ({ title, preview, download }: MerchProduct) => {
  return (
    <article className={cx('merch-item')} data-testid="merch">
      <div className={cx('preview-wrap')}>
        <img className={cx('preview')} src={`https://cdn.rs.school/${preview[0]}`} alt={title} />
      </div>
      <div className={cx('info-wrap')}>
        <Subtitle>{title}</Subtitle>
        <LinkCustom href={`https://cdn.rs.school/${download[0]}`} download>
          Download
        </LinkCustom>
      </div>
    </article>
  );
};
