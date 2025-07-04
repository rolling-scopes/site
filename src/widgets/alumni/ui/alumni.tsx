import classNames from 'classnames/bind';
import Image from 'next/image';

import { alumni } from '../constants';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './alumni.module.scss';

const cx = classNames.bind(styles);

export const Alumni = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('content', 'alumni')}>
        <WidgetTitle mods="asterisk">Our alumni</WidgetTitle>
        <Paragraph>
          We are immensely proud of RS School alumni who build their successful careers in ambitious
          IT companies
        </Paragraph>
        <ul className={cx('alumni-list')}>
          {alumni.map(({ id, image }) => (
            <li key={id} className={cx('logo-container')}>
              <Image className={cx('logo')} src={image} alt={id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
