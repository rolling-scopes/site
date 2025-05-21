'use client';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { downloadArchive } from '../../helpers/download';
import { MerchProduct } from '@/entities/merch/types';
import downloadImg from '@/shared/assets/svg/download.svg';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-card.module.scss';

export const cx = classNames.bind(styles);

export const MerchCard = ({ title, preview, download }: MerchProduct) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);
      await downloadArchive(download, `${title}.zip`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className={cx('merch-card')} data-testid="merch">
      <figure className={cx('preview-wrap')}>
        <div className={cx('image-container')}>
          <Image
            className={cx('preview')}
            src={preview[0]}
            alt={title}
            fill
            sizes="(max-width: 320px) 100vw, 320px"
          />
        </div>
        <button onClick={handleDownload} className={cx('download')} disabled={isLoading}>
          <Image src={downloadImg} alt="download link" className={cx('download-img')} />
        </button>
      </figure>
      <div className={cx('info-wrap')}>
        <Paragraph fontSize="medium">{title}</Paragraph>
      </div>
    </article>
  );
};
