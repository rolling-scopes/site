import classnames from 'classnames/bind';
import image from '@/shared/assets/map.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './numbers.module.scss';

const cx = classnames.bind(styles);

type InfoCellProps = {
  title: string;
  description: string;
};

const InfoCell = ({ title, description }: InfoCellProps) => (
  <article className={cx('info-cell')}>
    <WidgetTitle size="large" className={cx('number')}>
      {title}
    </WidgetTitle>
    <Paragraph fontSize="medium" className={cx('info-cell-text')}>
      {description}
    </Paragraph>
  </article>
);

export const Numbers = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('numbers-content', 'content')}>
        <article className={cx('text-container')}>
          <WidgetTitle mods="asterisk">The Rolling Scopes in numbers</WidgetTitle>
          <Paragraph fontSize="large">
            Everyone can discover our community, regardless of age, professional employment, or
            place of residence.
          </Paragraph>
          <Paragraph>
            Developers from different companies and countries are connected to pass on your
            knowledge, enrich your network and just have fun.
          </Paragraph>
        </article>
        <div className={cx('info')}>
          <InfoCell title="62k+" description="members" />
          <InfoCell title="500+" description="events" />
          <InfoCell title="600+" description="videos on YouTube" />
          <InfoCell title="1800+" description="RS School alumni per year" />
        </div>
        <Image className={cx('map')} src={image} alt="map" />
      </div>
    </section>
  );
};
