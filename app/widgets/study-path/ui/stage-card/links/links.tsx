import { LinkCustom } from '@/shared/ui/link-custom';

import './links.scss';

interface LinksProps {
  links: {
    href: string;
    linkTitle: string;
    isActive?: boolean;
  }[];
}

export const Links = ({ links }: LinksProps) => {
  return (
    <p className="stage-links">
      {links.map(({ href, linkTitle }) => (
        <LinkCustom href={href} key={linkTitle}>
          {linkTitle}
        </LinkCustom>
      ))}
    </p>
  );
};
