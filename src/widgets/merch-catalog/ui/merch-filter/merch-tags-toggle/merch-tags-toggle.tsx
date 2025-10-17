import classNames from 'classnames/bind';
import Image from 'next/image';

import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './merch-tags-toggle.module.scss';

const cx = classNames.bind(styles);

interface MerchTagsToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MerchTagsToggle = ({ isOpen, onClick }: MerchTagsToggleProps) => {
  return (
    <button
      type="button"
      className={cx('button', 'rounded', { expanded: isOpen })}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <Subtitle size="extra-small" weight="medium" as="h3">
        All filters
      </Subtitle>
      <Image
        src={DropdownArrow}
        alt=""
        aria-label="dropdown-arrow"
        className={cx('dropdown-arrow', { rotate: isOpen })}
      />
    </button>
  );
};
