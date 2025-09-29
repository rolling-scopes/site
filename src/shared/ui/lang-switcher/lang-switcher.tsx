'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Popover } from 'radix-ui';

import languageIcon from '@/shared/assets/svg/translate.svg';
import { LinkCustom } from '@/shared/ui/link-custom';

import styles from './lang-switcher.module.scss';

const cx = classNames.bind(styles);

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  const isRuActive = pathname.startsWith('/ru');
  const path = pathname.split('/').filter(Boolean);

  if (isRuActive) {
    path.shift();
  }

  const preservePath = path.join('/');

  const ruPath = `/ru/${preservePath}`;
  const enPath = `/${preservePath}`;

  const handlePopoverToggle = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className={cx('lang-switcher', className)}>
      <Popover.Root open={isOpened} onOpenChange={handlePopoverToggle}>
        <Popover.Trigger asChild>
          <button
            title="Change language"
            className={cx('popover-trigger', { 'popover-trigger-opened': isOpened })}
            aria-label="Change Language"
          >
            <Image
              src={languageIcon}
              width="18"
              height="18"
              alt=""
              aria-hidden="true"
            />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={cx('popover-content', { 'popover-content-opened': isOpened })}
            sideOffset={5}
          >
            <LinkCustom
              preserveLang={false}
              className={cx('popover-link',
                { 'popover-link-active': !isRuActive },
              )}
              href={enPath}
              onClick={handlePopoverToggle}
            >
              English
            </LinkCustom>

            <LinkCustom
              preserveLang={false}
              className={cx('popover-link',
                { 'popover-link-active': isRuActive })}
              href={ruPath}
              onClick={handlePopoverToggle}
            >
              Russian
            </LinkCustom>

            <Popover.Arrow className={cx('popover-arrow')} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
