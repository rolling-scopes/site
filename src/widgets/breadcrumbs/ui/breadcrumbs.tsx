import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { BreadcrumbItem } from './breadcrumb-item';
import { breadcrumbNameMap } from '../constants';
import { ROUTES } from '@/app/const';
import { RouteValues } from '@/app/types/route.types.ts';

import styles from './breadcrumbs.module.scss';

const cx = classNames.bind(styles);

export const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter(Boolean) as RouteValues[];

  const transformedCrumbs = crumbs.map((crumb, i) => ({
    text: breadcrumbNameMap[crumb] || crumb,
    linkTo: `/${crumbs.slice(0, i + 1).join('/')}/`,
    isLastLink: i === crumbs.length - 1,
  }));

  return (
    <nav className={cx('container')}>
      <div className={cx('content', 'breadcrumbs-content')}>
        <ul>
          <BreadcrumbItem linkTo={ROUTES.HOME} text="Home" />
          {transformedCrumbs.map((crumb, i) => (
            <BreadcrumbItem key={`${crumb.text}${i}`} {...crumb} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
