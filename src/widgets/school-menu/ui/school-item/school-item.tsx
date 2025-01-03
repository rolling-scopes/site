/* eslint-disable @stylistic/jsx-closing-bracket-location */
import { HTMLProps } from 'react';
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
  icon?: StaticImageData;
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
  return (
    <li {...props}>
      <Link href={url} className={cx('school-item')}>
        {icon && <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          aria-hidden="true"
          data-testid="school-item-icon"
        />}
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
