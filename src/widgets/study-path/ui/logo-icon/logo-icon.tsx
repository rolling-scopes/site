import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import styles from './logo-icon.module.scss';

const cx = classNames.bind(styles);

type LogoIconProps = {
  icon: StaticImageData;
  title: string;
};

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className={cx('stage-logo-wrapper')}>
      <Image src={icon} alt={title} className={cx('stage-logo')} />
    </div>
  );
};
