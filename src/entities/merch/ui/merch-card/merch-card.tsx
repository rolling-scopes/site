'use client';
import { useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { downloadArchive } from '../../helpers/download';
import { MerchProduct } from '@/entities/merch/types';
import downloadImg from '@/shared/assets/svg/download.svg';
import loadingImg from '@/shared/assets/svg/loading.svg';
import loadingZip from '@/shared/assets/svg/spin.svg';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-card.module.scss';

export const cx = classNames.bind(styles);

export const MerchCard = ({ title, preview, download }: MerchProduct) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleDownload = useCallback(async () => {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);

    try {
      const minDelay = new Promise((resolve) => setTimeout(resolve, 500));

      await Promise.all([downloadArchive(download, `${title}.zip`), minDelay]);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading, download, title]);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <article className={cx('merch-card')} data-testid="merch">
      <figure className={cx('preview-wrap')}>
        <div className={cx('image-container')}>
          <Image
            className={cx('preview')}
            src={isImageLoading ? loadingImg : preview[0]}
            alt={isImageLoading ? 'Loading...' : title}
            fill
            sizes="(max-width: 320px) 100vw, 320px"
            onLoad={handleImageLoad}
          />
        </div>
        <button
          onClick={handleDownload}
          className={cx('download')}
          disabled={isImageLoading || isDownloading}
          aria-label="Download merch files"
        >
          <Image
            src={isImageLoading || isDownloading ? loadingZip : downloadImg}
            alt="download link"
            className={cx('download-img')}
          />
        </button>
      </figure>
      <div className={cx('info-wrap')}>
        <Paragraph fontSize="medium">{title}</Paragraph>
      </div>
    </article>
  );
};
