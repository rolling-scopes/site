import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { DropdownArrow } from '@/shared/icons/dropdown-arrow';

import styles from './mobile-nav-item.module.scss';

const cx = classNames.bind(styles);

type MobileNavItemProps = {
  title: string;
  icon?: StaticImageData;
  isDropdownActive: boolean;
  color: string;
  onMenuItemClick: (title: string) => void;
};

export const MobileNavItem = ({
  onMenuItemClick,
  icon,
  isDropdownActive,
  title,
  color,
}: MobileNavItemProps) => {
  return (
    <button onClick={() => onMenuItemClick(title)} className={cx('category-link', color)}>
      <div className={cx('category-title')}>
        {icon && (
          <Image
            src={icon}
            alt="Donate-icon"
            width={20}
            height={18}
            aria-hidden="true"
          />
        )}
        <span>{title}</span>
      </div>
      <span
        className={cx('dropdown-arrow', { rotate: isDropdownActive })}
        role="button"
        aria-expanded={isDropdownActive}
      >
        <DropdownArrow />
      </span>
    </button>
  );
};
