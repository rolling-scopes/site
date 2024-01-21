import './StageCard.scss';
import type { StageCardProps } from './StageCard.types';

export const StageCard = ({ id, title, description, logoIcon, links }: StageCardProps) => {
  return (
    <div className="stage">
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
              className={`${isActive ? '' : 'disabled'}`}
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
