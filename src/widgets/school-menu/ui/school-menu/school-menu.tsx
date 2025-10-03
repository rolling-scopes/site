import { HTMLProps, PropsWithChildren, RefObject } from 'react';
import classNames from 'classnames/bind';

import { Subtitle } from '@/shared/ui/subtitle';
import { Color } from '@/widgets/school-menu/types';
import { SchoolItem } from '@/widgets/school-menu/ui/school-item/school-item';

import styles from './school-menu.module.scss';

const cx = classNames.bind(styles);

type SchoolMenuProps = PropsWithChildren
  & HTMLProps<HTMLUListElement> & {
    heading?: string;
    color?: Color;
    isVisible?: boolean;
    listRef?: RefObject<HTMLUListElement | null>;
  };

export const SchoolMenu = ({
  heading,
  color = 'light',
  children,
  className,
  isVisible,
  listRef,
}: SchoolMenuProps) => {
  return (
    <div
      className={cx('school-menu', {
        visible: isVisible === true,
        hidden: isVisible === false,
      })}
    >
      {heading && <Subtitle className={cx('heading', color)}>{heading}</Subtitle>}
      <ul ref={listRef} className={cx('school-list', className)}>{children}</ul>
    </div>
  );
};

SchoolMenu.Item = SchoolItem;
