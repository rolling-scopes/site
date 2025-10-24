import { RefObject, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'next/navigation';

import { KEY_CODES, NAV_MENU_LABELS } from '@/shared/constants';
import { ApiResourceLocale } from '@/shared/types';
import { Paragraph } from '@/shared/ui/paragraph';
import { NavMenuLabel } from '@/widgets/header/header';
import { MenuItem } from '@/widgets/header/helpers/generate-nav-menu-data';
import { SchoolMenu } from '@/widgets/school-menu';
import { DONATION_DESCRIPTION_TRANSLATION_MAP } from 'data';

import styles from './dropdown-content.module.scss';

const cx = classNames.bind(styles);

type DropdownContentProps = {
  activeMenuItem: NavMenuLabel | null;
  menuData: MenuItem[];
  activeItemRef: RefObject<HTMLAnchorElement | null>;
};

export const DropdownContent = ({
  activeMenuItem,
  menuData,
  activeItemRef,
}: DropdownContentProps) => {
  const contentClassName = activeMenuItem?.replace(/\s+/g, '').toLowerCase() + '-content';
  const isMenuSupportUs = activeMenuItem === NAV_MENU_LABELS.SUPPORT_US;
  const listRef = useRef<HTMLUListElement>(null);
  const params = useParams();

  const lang = params.lang as ApiResourceLocale ?? 'en-US';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableElements = listRef.current?.querySelectorAll<HTMLElement>('a[href]');

      if (e.key !== KEY_CODES.TAB || !focusableElements?.length || !document.activeElement) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    };

    const current = listRef.current;

    current?.addEventListener('keydown', handleKeyDown);
    return () => current?.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={cx('dropdown-content', { 'support-container': isMenuSupportUs })}
      data-testid="dropdown-content"
    >
      {isMenuSupportUs && (
        <div className={cx('support-text')}>
          <Paragraph fontSize="small" className={cx('support-text-paragraph')}>
            {DONATION_DESCRIPTION_TRANSLATION_MAP[lang]}
          </Paragraph>
        </div>
      )}
      <SchoolMenu className={contentClassName} listRef={listRef}>
        {menuData.map((option, i) => (
          <SchoolMenu.Item
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            url={option.url}
            activeItemRef={i === 0 ? activeItemRef : undefined}
          />
        ))}
      </SchoolMenu>
    </div>
  );
};
