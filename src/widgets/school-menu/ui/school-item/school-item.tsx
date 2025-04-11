import { HTMLProps, ReactNode } from 'react';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Color } from '@/widgets/school-menu/types';

import styles from './school-item.module.scss';

const cx = classNames.bind(styles);

type SchoolItemProps = HTMLProps<HTMLLIElement> & {
  title: string;
  url: string;
  description?: string;
  icon?: StaticImageData | ReactNode;
  color?: Color;
};

export const SchoolItem = ({
  icon,
  description,
  title,
  color = 'dark',
  url,
  ...props
}: SchoolItemProps) => {
  const isStaticImageData = (icon: StaticImageData | ReactNode): icon is StaticImageData =>
    typeof icon === 'object' && icon !== null && 'src' in icon;

  return (
    <li {...props} className={cx(props.className)}>
      <Link href={url} className={cx('school-item')}>
        {icon
          && (isStaticImageData(icon)
            ? (
                <Image
                  src={icon}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                  data-testid="school-item-icon"
                />
              )
            : (
                <span aria-hidden="true" data-testid="school-item-icon">
                  {icon}
                </span>
              ))}
        <div className={cx('description-wrapper')}>
          <span className={cx('title', color)}>{title}</span>
          {description && (
            <small className={cx('description')} data-testid="school-item-description">
              {description}
            </small>
          )}
        </div>
      </Link>
    </li>
  );
};
