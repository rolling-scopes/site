import classNames from 'classnames/bind';

import { AwsLogo, GithubLogo, JetBrainsLogo } from '@/shared/icons';
import { WidgetTitle } from '@/shared/ui/widget-title';

// import styles from './partnered.module.scss';
const styles = {};

const cx = classNames.bind(styles);

export const Partnered = () => (
  <section className={cx('partnered-container', 'container')} data-testid="partnered">
    <article className={cx('partnered-content', 'content')}>
      <WidgetTitle size="small">Partnered with</WidgetTitle>
      <ul className={cx('partners')}>
        <li className={cx('partner-logo-container')}>
          <JetBrainsLogo />
        </li>
        <li className={cx('partner-logo-container')}>
          <AwsLogo />
        </li>
        <li className={cx('partner-logo-container')}>
          <GithubLogo />
        </li>
      </ul>
    </article>
  </section>
);
