import { Link } from 'react-router-dom';

import './breadcrumbs.scss';

interface BreadcrumbProps {
  linkTo: string;
  text: string;
  isLastLink?: boolean;
}

export function Breadcrumb(props: BreadcrumbProps) {
  const { linkTo, text, isLastLink } = props;

  if (isLastLink) {
    return <li><span className="link disabled">{text}</span></li>;
  }

  return (
    <li>
      <Link to={linkTo} className="link">
        {text}
      </Link>
      <span className="separator">/</span>
    </li>
  );
}
