import classNames from 'classnames/bind';
import { alumni } from '../constants';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './alumni.module.scss';

const cx = classNames.bind(styles);

export const Alumni = () => {
  return (
    <article className={cx('container')}>
      <section className={cx('content', 'alumni')}>
        <WidgetTitle mods="asterisk">Our alumni</WidgetTitle>
        <Paragraph>
          We are immensely proud of RS School alumni who build their successful careers in ambitious
          IT companies
        </Paragraph>
        <section className={cx('alumni-list')}>
          {alumni.map(({ id, image }) => (
            <figure key={id} className={cx('logo-container')}>
              <Image className={cx('logo')} img={image} alt={id} />
            </figure>
          ))}
        </section>
      </section>
    </article>
  );
};
