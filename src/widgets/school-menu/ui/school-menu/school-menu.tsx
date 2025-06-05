import { HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import { Subtitle } from '@/shared/ui/subtitle';
import { Color } from '@/widgets/school-menu/types';
import { SchoolItem } from '@/widgets/school-menu/ui/school-item/school-item';

import styles from './school-menu.module.scss';

const cx = classNames.bind(styles);

type SchoolMenuProps = PropsWithChildren &
  HTMLProps<HTMLUListElement> & {
    heading?: string;
    color?: Color;
    layout?: 'columns' | 'single';
    isVisible?: boolean;
  };

export const SchoolMenu = ({
  heading,
  color = 'light',
  children,
  className,
  layout = 'single',
  isVisible,
}: SchoolMenuProps) => {
  return (
    <div
      className={cx('school-menu', {
        visible: isVisible === true,
        hidden: isVisible === false,
      })}
    >
      {heading && <Subtitle className={cx('heading', color)}>{heading}</Subtitle>}
      <ul className={cx('school-list', `school-list--${layout}`, className)}>{children}</ul>
    </div>
  );
};

SchoolMenu.Item = SchoolItem;
