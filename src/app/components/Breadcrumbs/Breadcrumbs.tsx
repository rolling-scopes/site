import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

type BreadCrumbsProps = {
  crumbs: { label: string; path: string }[];
};

export const Breadcrumbs = ({ crumbs }: BreadCrumbsProps) => {
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="breadcrumbs container">
      <div className="breadcrumbs content">
        <ul>
          {crumbs.map(({ label, path }, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={i}>
                {!isLast ? (
                  <>
                    <Link to={path} className="link">
                      {label}
                    </Link>
                    <span className="separator">/</span>
                  </>
                ) : (
                  <span className="link disabled">{label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
