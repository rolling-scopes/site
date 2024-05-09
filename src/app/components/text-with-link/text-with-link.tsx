import { Fragment } from 'react/jsx-runtime';
import { LinkList } from '@/features/required/required.types';

import './text-with-link.scss';

interface TextWithLinkProps {
  data: LinkList;
}

export const TextWithLink = ({ data }: TextWithLinkProps) => {
  return data.map((item, index) => (
    <Fragment key={index}>
      {item.text && <span>{item.text}</span>}
      <a className="required-link" href={item.link}>
        {item.title}
      </a>
    </Fragment>
  ));
};
