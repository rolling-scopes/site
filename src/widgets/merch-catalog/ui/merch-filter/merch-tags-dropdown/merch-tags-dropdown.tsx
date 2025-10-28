import classNames from 'classnames/bind';
import Image from 'next/image';

import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-tags-dropdown.module.scss';

const cx = classNames.bind(styles);

type MerchTagsDropdownProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MerchTagsDropdown = ({ isOpen, onClick }: MerchTagsDropdownProps) => {
  return (
    <button
      type="button"
      className={cx('button', 'rounded', { expanded: isOpen })}
      onClick={onClick}
      aria-expanded={isOpen}
      data-testid="dropdown-button"
    >
      <Subtitle size="extra-small" weight="medium" as="h3" data-testid="dropdown-title">
        All filters
      </Subtitle>
      <Image
        src={DropdownArrow}
        alt=""
        className={cx('dropdown-arrow', { rotate: isOpen })}
        data-testid="dropdown-arrow"
        width={20}
        height={18}
        aria-hidden="true"
      />
    </button>
  );
};
