import { ExternalLinkIcon } from '@/icons/external-link-icon';

import './external-link.scss';

type PropsType = {
  href: string;
  text: string;
};

const ExternalLink = ({ href, text }: PropsType) => {
  return (
    <a href={href} target="_blank" className="external-link">
      {text}
      <span className="icon-wrapper">
        <ExternalLinkIcon />
      </span>
    </a>
  );
};

export default ExternalLink;
