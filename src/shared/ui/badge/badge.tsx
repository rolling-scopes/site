import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './badge.module.scss';

type BadgeProps = {
  title: string;
  paragraphs: string[];
  image: StaticImageData;
  alt: string;
};

export const Badge = (data: BadgeProps) => {
  const cx = classNames.bind(styles);

  return (
    <section
      className={cx('badge', 'container')}
      data-testid="badge"
    >
      <div className={cx('badge', 'content', 'column-2')}>
        <article className={cx('badge-info')}>
          <WidgetTitle mods="asterisk">{data.title}</WidgetTitle>
          {data.paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>
              {paragraph}
            </Paragraph>
          ),
          )}
        </article>
        <Image
          className={cx('badge-img')}
          src={data.image}
          alt={data.alt}
          data-testid="badge-img"
        />
      </div>
    </section>
  );
};
