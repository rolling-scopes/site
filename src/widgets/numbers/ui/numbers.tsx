import classnames from 'classnames/bind';
import image from '@/shared/assets/map.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './numbers.module.scss';

const cx = classnames.bind(styles);

interface InfoCellProps {
  title: string;
  description: string;
}

const InfoCell = ({ title, description }: InfoCellProps) => (
  <div className={cx('info-cell')}>
    <div className={cx('number')}>{title}</div>
    <div className={cx('text')}>{description}</div>
  </div>
);

const InfoCellDivider = () => <div className={cx('info-divider')} />;

export const Numbers = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('content')}>
        <div className={cx('text-container')}>
          <WidgetTitle mods="asterisk">The Rolling Scopes in numbers</WidgetTitle>
          <Paragraph fontSize="large">
            Everyone can discover our community, regardless of age, professional employment, or
            place of residence.
          </Paragraph>
          <Paragraph>
            Developers from different companies and countries are connected to pass on your
            knowledge, enrich your network and just have fun.
          </Paragraph>
        </div>
        <div className={cx('info')}>
          <div className={cx('left')}>
            <InfoCell title="62k+" description="members" />
            <InfoCellDivider />
            <InfoCell title="500+" description="events" />
            <InfoCellDivider />
          </div>
          <div className={cx('right')}>
            <InfoCell title="600+" description="videos on YouTube" />
            <InfoCellDivider />
            <InfoCell title="1800+" description="RS School alumni per year" />
          </div>
        </div>
        <Image className={cx('map')} src={image} alt="map" />
      </div>
    </div>
  );
};
