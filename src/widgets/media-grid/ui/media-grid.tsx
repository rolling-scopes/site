import classNames from 'classnames/bind';
import Image from 'next/image';

import { WidgetTitle } from '@/shared/ui/widget-title';
import { MediaGridSectionData } from '@/widgets/media-grid/types';

import styles from './media-grid.module.scss';

const cx = classNames.bind(styles);

export const MediaGrid = ({ title, description, media }: MediaGridSectionData) => {
  return (
    <article className={cx('container')}>
      <section className={cx('content', 'media-grid')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>

        {description}

        <section className={cx('media-grid-list')}>
          {media.map((item) => (
            <figure key={item.src} className={cx('logo-container')}>
              <Image
                className={cx('logo')}
                src={item.src}
                width={item.width}
                height={item.height}
                alt=""
                aria-hidden="true"
              />
            </figure>
          ))}
        </section>
      </section>
    </article>
  );
};
