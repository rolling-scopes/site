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
      {links.map(({ href, linkTitle, isActive = true }) => (
        <a href={href} key={linkTitle} className={`${isActive ? '' : 'disabled'}`} target="blank">
          {linkTitle}
        </a>
      ))}
    </p>
  );
};
