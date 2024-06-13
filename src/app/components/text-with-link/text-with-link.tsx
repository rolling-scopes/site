import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';
import { LinkList } from '@/features/required/required.types';

import './text-with-link.scss';

interface TextWithLinkProps {
  data: LinkList;
}

export const TextWithLink = ({ data }: TextWithLinkProps) => {
  return data.map(({ id, text, link, title }) => (
    <Fragment key={id}>
      {text && <span>{text}</span>}
      <Link className="required-link" to={link}>
        {title}
      </Link>
    </Fragment>
  ));
};
