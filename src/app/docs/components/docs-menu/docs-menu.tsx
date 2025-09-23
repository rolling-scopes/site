'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Menu } from '../../types';
import chevronRight from '@/shared/assets/svg/chevron-right.svg';
import { isValidUrl } from '@/shared/helpers/is-valid-url';
import { LinkCustom } from '@/shared/ui/link-custom';

import styles from './docs-menu.module.scss';

const cx = classNames.bind(styles);

type DocsMenuProps = {
  menu: Menu;
  isOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
};

export const DocsMenu = ({ menu, isOpen, onMenuToggle }: DocsMenuProps) => {
  const pathname = usePathname();

  const handleMenuToggle = () => {
    onMenuToggle(!isOpen);
  };

  const isActive = (link: string) => {
    return pathname === `/docs/${link}`;
  };

  const resolveHref = (link: string) => {
    return isValidUrl(link) ? link : `/docs/${link}`;
  };

  const renderMenuItems = (items: Menu) => {
    return items.map((doc, index) => {
      if (doc?.items) {
        return (
          <li key={index}>
            {doc.link && (
              <LinkCustom href={resolveHref(doc.link)} className={cx('link', { active: isActive(doc.link) })}>
                {doc.title}
              </LinkCustom>
            )}
            {!doc.link && <span>{doc.title}</span>}
            <ul className={cx({ border: true })}>{renderMenuItems(doc.items)}</ul>
          </li>
        );
      }

      return (
        doc.link && (
          <li key={index}>
            <LinkCustom href={resolveHref(doc.link)} className={cx('link', { active: isActive(doc.link) })}>
              {doc.title}
            </LinkCustom>
          </li>
        )
      );
    });
  };

  return (
    <>
      <button className={cx('menu-toggle')} onClick={handleMenuToggle}>
        <Image
          src={chevronRight}
          alt=""
          aria-hidden="true"
          className={cx('chevron', { open: isOpen })}
        />
        Menu
      </button>
      <nav className={cx('menu', { open: isOpen })}>
        <ul>{renderMenuItems(menu)}</ul>
      </nav>
    </>
  );
};
