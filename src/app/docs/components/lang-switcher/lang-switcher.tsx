import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import translate from '@/shared/assets/svg/translate.svg';

import styles from './lang-switcher.module.scss';

const cx = classNames.bind(styles);

export const LangSwitcher = () => {
  const pathname = usePathname();

  const isRuActive = pathname.startsWith('/docs/ru');
  const isEnActive = pathname.startsWith('/docs/en');

  return (
    <div className={cx('lang-switcher')}>
      <Image src={translate} alt="Language switcher icon" width={24} height={24} />
      <span>
        <Link href="/docs/ru" className={cx({ active: isRuActive })}>
          RU
        </Link>
        &nbsp;/&nbsp;
        <Link href="/docs/en" className={cx({ active: isEnActive })}>
          EN
        </Link>
      </span>
    </div>
  );
};
