import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import styles from './logo-icon.module.scss';

const cx = classNames.bind(styles);

interface LogoIconProps {
  icon: StaticImageData;
  title: string;
}

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className={cx('stage-logo-wrapper')}>
      <Image className={cx('stage-logo')} src={icon} alt={title} />
    </div>
  );
};
