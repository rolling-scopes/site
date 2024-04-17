import { Link, useLocation } from 'react-router-dom';
import { breadcrumbNameMap } from './constants';
import { buildUrl } from '@/app/services/platform';

import './breadcrumbs.scss';

export const Breadcrumbs = () => {
  const location = useLocation();

  const crumbs = location.pathname.split('/').filter(Boolean);

  const transformedCrumbs = crumbs.map((crumb) => breadcrumbNameMap[crumb] || crumb);

  return (
    <nav className="breadcrumbs container">
      <div className="breadcrumbs content">
        <ul>
          <li>
            <Link to={buildUrl('/')} className="link">
              Home
            </Link>
            <span className="separator">/</span>
          </li>
          {transformedCrumbs.map((crumb, i) => {
            const isLast = i === transformedCrumbs.length - 1;
            const to = buildUrl(`/${crumbs.slice(0, i + 1).join('/')}`);

            return (
              <li key={i}>
                {!isLast ? (
                  <>
                    <Link to={to} className="link">
                      {crumb}
                    </Link>
                    <span className="separator">/</span>
                  </>
                ) : (
                  <span className="link disabled">{crumb}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
