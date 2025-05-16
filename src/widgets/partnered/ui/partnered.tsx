import classNames from 'classnames/bind';

import { partners } from '../constants';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './partnered.module.scss';

const cx = classNames.bind(styles);

export const Partnered = () => (
  <section className={cx('partnered-container', 'container')} data-testid="partnered">
    <div className={cx('partnered-content', 'content')}>
      <WidgetTitle size="small">Partnered with</WidgetTitle>
      <ul className={cx('partners')}>
        {partners.map(({ id, Component }) => (
          <li key={id} className={cx('partner-logo-container')}>
            <Component />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
