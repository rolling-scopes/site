import './option-item.scss';

export type OptionItemProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export const OptionItem = ({ title, description, buttonLabel, href }: OptionItemProps) => (
  <div key={title} className="option">
    <h3 className="option-title">{title}</h3>
    <p className="option-description" role="text">
      {description}
    </p>
    {buttonLabel && (
      <a href={href} target="_blank" rel="noreferrer" className="option-button">
        {buttonLabel}
        <span className="material-symbols-outlined arrow">arrow_forward</span>
      </a>
    )}
  </div>
);
