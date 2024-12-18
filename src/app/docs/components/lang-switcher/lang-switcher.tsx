import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { Language } from '@/shared/types';

import styles from './lang-switcher.module.scss';

const cx = classNames.bind(styles);

type LangSwitcherProps = {
  lang: Language;
};

export const LangSwitcher = ({ lang }: LangSwitcherProps) => {
  const router = useRouter();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    let newPath;

    if (newLocale === 'ru') {
      newPath = '/docs/ru';
    } else {
      newPath = '/docs/en';
    }

    router.push(newPath);
  };

  return (
    <div className={cx('lang-switcher')}>
      <select
        className={cx('lang-select')}
        value={lang}
        onChange={handleLanguageChange}
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
