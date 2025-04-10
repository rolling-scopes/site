import { Children, HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import { Color } from '@/widgets/school-menu/types';
import { SchoolItem } from '@/widgets/school-menu/ui/school-item/school-item';

import styles from './school-menu.module.scss';

const cx = classNames.bind(styles);

type SchoolMenuProps = PropsWithChildren &
  HTMLProps<HTMLUListElement> & {
    heading?: string;
    color?: Color;
    layout?: 'columns' | 'single';
    mobileClass?: 'visible' | 'hidden';
  };

export const SchoolMenu = ({
  heading,
  color = 'light',
  children,
  className,
  layout = 'single',
  mobileClass,
}: SchoolMenuProps) => {
  return (
    <div className={cx('school-menu', mobileClass)}>
      {heading && <h3 className={cx('heading', color)}>{heading}</h3>}
      <ul
        className={cx('school-list', `school-list--${layout}`, className)}
        style={
          layout === 'columns'
            ? { gridTemplateRows: `repeat(${Math.ceil(Children.count(children) / 2)}, auto)` }
            : undefined
        }
      >
        {children}
      </ul>
    </div>
  );
};

SchoolMenu.Item = SchoolItem;
