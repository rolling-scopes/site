import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import translate from '@/shared/assets/svg/translate.svg';

import styles from './lang-switcher.module.scss';

const cx = classNames.bind(styles);

export const LangSwitcher = () => {
  const pathname = usePathname();

  const isRuActive = pathname.startsWith(`/ru`);
  const isEnActive = !isRuActive;
  const path = pathname.split('/').filter(Boolean);

  if (isRuActive) {
    path.shift();
  }

  const preservePath = path.join('/');

  const ruPath = `/ru/${preservePath}`;
  const enPath = `/${preservePath}`;

  return (
    <div className={cx('lang-switcher')}>
      <Image src={translate} alt="Language switcher" width={24} height={24} />
      <span>
        <Link href={ruPath} className={cx({ active: isRuActive })}>
          RU
        </Link>
        &nbsp;/&nbsp;
        <Link href={enPath} className={cx({ active: isEnActive })}>
          EN
        </Link>
      </span>
    </div>
  );
};
