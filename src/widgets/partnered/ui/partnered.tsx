import classNames from 'classnames/bind';

import { partners } from '../constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './partnered.module.scss';

const cx = classNames.bind(styles);

export const Partnered = () => (
  <article className={cx('container')} data-testid="partnered">
    <section className={cx('partnered-content', 'content')}>
      <WidgetTitle size="small">Partnered with</WidgetTitle>
      <div className={cx('partners')} data-testid="partners-list">
        {partners.map(({ id, Component, href }) => (
          <LinkCustom href={href} external icon={null} key={id}>
            <Component />
          </LinkCustom>
        ))}
      </div>
    </section>
  </article>
);
