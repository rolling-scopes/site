import classNames from 'classnames/bind';

import { NAV_MENU_LABELS } from '@/shared/constants';
import { Paragraph } from '@/shared/ui/paragraph';
import { MenuItem } from '@/widgets/header/helpers/generate-nav-menu-data';
import { SchoolMenu } from '@/widgets/school-menu';

import styles from './dropdown-content.module.scss';

const cx = classNames.bind(styles);

type DropdownContentProps = {
  activeMenuItem: NAV_MENU_LABELS | null;
  menuData: MenuItem[];
};

export const DropdownContent = ({ activeMenuItem, menuData }: DropdownContentProps) => {
  const contentClassName = activeMenuItem?.replace(/\s+/g, '').toLowerCase() + '-content';

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
      <SchoolMenu className={contentClassName}>
        {menuData.map((option) => (
          <SchoolMenu.Item
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            url={option.url}
          />
        ))}
      </SchoolMenu>
    </div>
  );
};
