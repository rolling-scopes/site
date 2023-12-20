import React from 'react';
import './StageCard.scss';

type StageCardProps = {
  id: number;
  title: string;
  description: string;
  logoIcon: string;
  links: { href: string; linkTitle: string; isActive?: boolean }[];
};
const StageCard: React.FC<StageCardProps> = ({ id, title, description, logoIcon, links }) => {
  return (
    <div key={id} className="stage">
      <div className="stage-step">
        <span className="stage-number">{id}</span>
        <div className="stage-line" />
      </div>
      <div className="stage-info">
        <h2 className="stage-title">{title}</h2>
        <p className="stage-description">{description}</p>
        <p className="stage-links">
          {links.map(({ href, linkTitle, isActive = true }) => (
            <a
              href={href}
              key={linkTitle}
              className={`className=${isActive ? undefined : 'disabled'}`}
              target="blank">
              {linkTitle}
            </a>
          ))}
        </p>
      </div>
      <div className="stage-logo">
        <img src={logoIcon} alt={title} />
      </div>
    </div>
  );
};

export default StageCard;
