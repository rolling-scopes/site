import classNames from 'classnames/bind';
import Image from 'next/image';
import { ImageLink } from 'data';

import styles from './benefit-item.module.scss';

const cx = classNames.bind(styles);

type BenefitItemProps = {
  classNames: string;
  icon?: ImageLink;
  text: string;
};

export const BenefitItem = ({ text, icon, classNames }: BenefitItemProps) => {
  return (
    <li className={classNames} data-testid="benefit">
      {icon?.href && <Image className={cx('benefit-icon')} src={icon.href} alt={icon.alt} />}
      {text}
    </li>
  );
};
