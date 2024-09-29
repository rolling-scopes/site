import { NavLink } from '@remix-run/react';
import classNames from 'classnames/bind';

import styles from './breadcrumbs.module.scss';

const cx = classNames.bind(styles);

interface BreadcrumbProps {
  linkTo: string;
  text: string;
  isLastLink?: boolean;
}

export function BreadcrumbItem({ linkTo, text, isLastLink = false }: BreadcrumbProps) {
  if (isLastLink) {
    return (
      <li>
        <span className={cx('link', 'disabled')}>{text}</span>
      </li>
    );
  }

  return (
    <li>
      <NavLink to={linkTo} className={cx('link')}>
        {text}
      </NavLink>
      <span className={cx('separator')}>/</span>
    </li>
  );
}
