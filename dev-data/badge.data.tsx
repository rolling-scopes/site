import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

type BadgeData = {
  title: string;
  paragraphs: string[];
  image: StaticImageData;
  alt: string;
  className: string;
  styles: { [key: string]: string };
};

export const Badge = (data: BadgeData) => {
  const cx = classNames.bind(data.styles);

  return (
    <section
      className={cx(data.className, 'container')}
      data-testid={data.className}
    >
      <div className={cx(data.className, 'content', 'column-2')}>
        <article className={cx(data.className + '-info')}>
          <WidgetTitle mods="asterisk">{data.title}</WidgetTitle>
          {data.paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>
              {paragraph}
            </Paragraph>
          ),
          )}
        </article>
        <Image
          className={cx(data.className + '-img')}
          src={data.image}
          alt={data.alt}
          data-testid={data.className + '-img'}
        />
      </div>
    </section>
  );
};
