import { Fragment } from 'react/jsx-runtime';

import { LinkCustom } from '@/shared/ui/link-custom';
import { LinkList } from 'data';

interface TextWithLinkProps {
  data: LinkList;
}

export const TextWithLink = ({ data }: TextWithLinkProps) => {
  return data.map(({ id, text, link, title }) => (
    <Fragment key={id}>
      {text && <span>{text}</span>}
      {link && (
        <LinkCustom href={link} external>
          {title}
        </LinkCustom>
      )}
    </Fragment>
  ));
};
