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
  };

export const SchoolMenu = ({ heading, color = 'light', children, className }: SchoolMenuProps) => {
  return (
    <div className={cx('school-menu')}>
      {heading && <Subtitle weight="normal" className={cx('heading', color)}>{heading}</Subtitle>}
      <ul className={cx('school-list', className)}>{children}</ul>
    </div>
  );
};

SchoolMenu.Item = SchoolItem;
