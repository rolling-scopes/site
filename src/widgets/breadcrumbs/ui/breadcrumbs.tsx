import { useLocation } from 'react-router-dom';
import { Breadcrumb } from './breadcrumb';
import { breadcrumbNameMap } from '../constants';
import { ROUTES } from '@/app/const';
import { RouteValues } from '@/app/types/route.types.ts';

import './breadcrumbs.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter(Boolean) as RouteValues[];

  const transformedCrumbs = crumbs.map((crumb, i) => ({
    text: breadcrumbNameMap[crumb] || crumb,
    linkTo: `/${crumbs.slice(0, i + 1).join('/')}/`,
    isLastLink: i === crumbs.length - 1,
  }));

  return (
    <nav className="breadcrumbs container">
      <div className="breadcrumbs content">
        <ul>
          <Breadcrumb linkTo={ROUTES.HOME} text="Home" />
          {transformedCrumbs.map((crumb, i) => (
            <Breadcrumb key={`${crumb.text}${i}`} {...crumb} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
