import classNames from 'classnames/bind';
import Image from 'next/image';

import DropdownArrow from '@/shared/assets/svg/dropdown-arrow.svg';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './tag-toggle-button.module.scss';

const cx = classNames.bind(styles);

interface TagDropdownButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export const TagToggleButton = ({ isExpanded, onClick }: TagDropdownButtonProps) => {
  return (
    <button
      type="button"
      className={cx('button', 'rounded', { expanded: isExpanded })}
      onClick={onClick}
      aria-expanded={isExpanded}
    >
      <Subtitle size="extra-small" weight="medium" as="h3">
        All filters
      </Subtitle>
      <Image src={DropdownArrow} alt="" className={cx('tag-arrow', { rotate: isExpanded })} />
    </button>
  );
};
