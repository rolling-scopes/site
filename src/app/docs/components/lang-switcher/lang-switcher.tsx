import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from './lang-switcher.module.scss';

const cx = classNames.bind(styles);

export const LangSwitcher = () => {
  return (
    <div className={cx('lang-switcher')}>
      <Link href="/docs/ru">Русский</Link>
      <Link href="/docs/en">English</Link>
    </div>
  );
};
