import classNames from 'classnames/bind';

import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './links.module.scss';

const cx = classNames.bind(styles);

type LinksProps = {
  links: {
    href: string;
    linkTitle: string;
    isActive?: boolean;
  }[];
};

export const Links = ({ links }: LinksProps) => {
  return (
    <Paragraph className={cx('stage-links')}>
      {links.map(({ href, linkTitle }) => (
        <LinkCustom href={href} key={linkTitle}>
          {linkTitle}
        </LinkCustom>
      ))}
    </Paragraph>
  );
};
