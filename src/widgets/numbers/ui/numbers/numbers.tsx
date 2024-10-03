import classnames from 'classnames/bind';
import { InfoCell } from '../info-cell/info-cell';
import map from '@/shared/assets/map.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { rsInNumbers } from 'data';

import styles from './numbers.module.scss';

const cx = classnames.bind(styles);

export const Numbers = () => {
  return (
    <section className={cx('numbers-content', 'content', 'container')}>
      <article className={cx('text-container')}>
        <WidgetTitle mods="asterisk">The Rolling Scopes in numbers</WidgetTitle>
        <Paragraph fontSize="large">
          Everyone can discover our community, regardless of age, professional employment, or place
          of residence.
        </Paragraph>
        <Paragraph>
          Developers from different companies and countries are connected to pass on your knowledge,
          enrich your network and just have fun.
        </Paragraph>
      </article>
      <div className={cx('numbers-info')}>
        {rsInNumbers.map(({ id, title, description }) => (
          <InfoCell key={id} title={title} description={description} />
        ))}
      </div>
      <Image
        className={cx('numbers-map')}
        src={map}
        alt="World map showing yellow dots marking various countries"
        data-testid="numbers-map"
      />
    </section>
  );
};
