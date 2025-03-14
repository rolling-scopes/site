import { Fragment } from 'react/jsx-runtime';

import { LinkCustom } from '../link-custom';
import { LinkList } from '@/widgets/required/required.types';

interface TextWithLinkProps {
  data: LinkList;
}

export const TextWithLink = ({ data }: TextWithLinkProps) => {
  return data.map(({ id, text, link, title, external = true }) => (
    <Fragment key={id}>
      {text && <span>{text}</span>}
      {link && <LinkCustom href={link} external={external}>{title}</LinkCustom>}
    </Fragment>
  ));
};
