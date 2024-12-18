'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '../../types';
import chevronDown from '@/shared/assets/svg/chevron-down.svg';
import chevronRight from '@/shared/assets/svg/chevron-right.svg';
import { isValidUrl } from '@/shared/helpers/isValidUrl';
import { Language } from '@/shared/types';

import styles from './docs-menu.module.scss';

const cx = classNames.bind(styles);

type DocsMenuProps = {
  menu: Menu;
  lang: Language;
  isOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
};

export const DocsMenu = ({ menu, lang, isOpen, onMenuToggle }: DocsMenuProps) => {
  const pathname = usePathname();

  const handleMenuToggle = () => {
    onMenuToggle(!isOpen);
  };

  const isActive = (link: string) => {
    return pathname.startsWith(`/docs/${lang}/${link}`);
  };

  const resolveHref = (link: string) => {
    return isValidUrl(link) ? link : `/docs/${lang}/${link}`;
  };

  const renderMenuItems = (items: Menu) => {
    return items.map((doc, index) => {
      if (doc?.items) {
        return (
          <li key={index}>
            {doc.link && (
              <Link
                href={resolveHref(doc.link)}
                className={cx({ active: isActive(doc.link) })}
              >
                {doc.title}
              </Link>
            )}
            {!doc.link && <span>{doc.title}</span>}
            <ul>{renderMenuItems(doc.items)}</ul>
          </li>
        );
      }
      return (
        doc.link && (
          <li key={index}>
            <Link href={resolveHref(doc.link)} className={cx({ active: isActive(doc.link) })}>
              {doc.title}
            </Link>
          </li>
        )
      );
    });
  };

  return (
    <>
      <button className={cx('menu-toggle')} onClick={handleMenuToggle}>
        <Image src={isOpen ? chevronDown : chevronRight} alt="" aria-hidden="true" />
        Menu
      </button>
      <nav className={cx('menu', { open: isOpen })}>
        <ul>{renderMenuItems(menu)}</ul>
      </nav>
    </>
  );
};
