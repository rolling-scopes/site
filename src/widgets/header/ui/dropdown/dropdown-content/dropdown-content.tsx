import { RefObject, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import { KEY_CODES, NAV_MENU_LABELS } from '@/shared/constants';
import { Paragraph } from '@/shared/ui/paragraph';
import { MenuItem } from '@/widgets/header/helpers/generate-nav-menu-data';
import { SchoolMenu } from '@/widgets/school-menu';

import styles from './dropdown-content.module.scss';

const cx = classNames.bind(styles);

type DropdownContentProps = {
  activeMenuItem: NAV_MENU_LABELS | null;
  menuData: MenuItem[];
  activeItemRef: RefObject<HTMLAnchorElement | null>;
};

export const DropdownContent = ({
  activeMenuItem,
  menuData,
  activeItemRef,
}: DropdownContentProps) => {
  const contentClassName = activeMenuItem?.replace(/\s+/g, '').toLowerCase() + '-content';

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== KEY_CODES.TAB) {
        return;
      }

      const focusableElements = listRef.current?.querySelectorAll<HTMLElement>('a[href]');

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!document.activeElement) {
        return;
      }

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
      className={cx('dropdown-content', { 'support-container': activeMenuItem === NAV_MENU_LABELS.SUPPORT_US })}
      data-testid="dropdown-content"
    >
      {activeMenuItem === NAV_MENU_LABELS.SUPPORT_US && (
        <div className={cx('support-text')}>
          <Paragraph fontSize="small">
            Your donations help us cover hosting, domains, licenses, and advertising for courses and
            events. Every donation, big or small, helps!
          </Paragraph>
          <Paragraph fontSize="small">Thank you for your support!</Paragraph>
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
