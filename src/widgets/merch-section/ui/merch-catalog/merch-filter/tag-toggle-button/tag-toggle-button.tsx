import classNames from 'classnames/bind';
import Image from 'next/image';

import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './tag-toggle-button.module.scss';

const cx = classNames.bind(styles);

interface TagToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const TagToggleButton = ({ isOpen, onClick }: TagToggleButtonProps) => {
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
      <Image src={DropdownArrow} alt="" className={cx('tag-arrow', { rotate: isOpen })} />
    </button>
  );
};
