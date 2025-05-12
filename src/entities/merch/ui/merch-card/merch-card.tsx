'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

import { MerchProduct } from '@/entities/merch/types';
import chevronLeft from '@/shared/assets/svg/chevron-left-solid.svg';
import chevronRight from '@/shared/assets/svg/chevron-right-solid.svg';
import downloadImg from '@/shared/assets/svg/download.svg';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './merch-card.module.scss';

export const cx = classNames.bind(styles);

export const MerchCard = ({ title, preview, download }: MerchProduct) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < preview.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  return (
    <article className={cx('merch-card')} data-testid="merch">
      <div className={cx('preview-wrap')}>
        <div {...handlers} className={cx('swipeable-area')}>
          <img className={cx('preview')} src={preview[currentIndex]} alt={title} />
        </div>

        {preview.length > 1 && (
          <>
            <button className={cx('swipe-btn', 'is-prev')} onClick={goToPrev} disabled={currentIndex === 0}>
              <Image
                src={chevronLeft}
                alt="chevron left icon"
                width={20}
                height={20}
                className={cx('arrow-img')}
              />
            </button>
            <button className={cx('swipe-btn', 'is-next')} onClick={goToNext} disabled={currentIndex === preview.length - 1}>
              <Image
                src={chevronRight}
                alt="chevron right icon"
                width={20}
                height={20}
                className={cx('arrow-img')}
              />
            </button>

            {preview.length > 1 && (
              <div className={cx('swipe-dots')}>
                {preview.map((_, index) => (
                  <span
                    key={index}
                    className={cx('swipe-dot', { active: index === currentIndex })}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <LinkCustom href={download[0]} className={cx('download')} download>
          <Image src={downloadImg} alt="download link" className={cx('download-img')} />
        </LinkCustom>
      </div>

      <div className={cx('info-wrap')}>
        <Paragraph fontSize="medium">{title}</Paragraph>
      </div>
    </article>
  );
};
