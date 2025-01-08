import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/core/const';
import translate from '@/shared/assets/svg/translate.svg';

import styles from './lang-switcher.module.scss';

const cx = classNames.bind(styles);

export const LangSwitcher = () => {
  const pathname = usePathname();

  const isRuActive = pathname.startsWith(`/${ROUTES.DOCS_RU}`);
  const isEnActive = pathname.startsWith(`/${ROUTES.DOCS_EN}`);

  return (
    <div className={cx('lang-switcher')}>
      <Image src={translate} alt="Language switcher" width={24} height={24} />
      <span>
        <Link href={`/${ROUTES.DOCS_RU}`} className={cx({ active: isRuActive })}>
          RU
        </Link>
        &nbsp;/&nbsp;
        <Link href={`/${ROUTES.DOCS_EN}`} className={cx({ active: isEnActive })}>
          EN
        </Link>
      </span>
    </div>
  );
};
