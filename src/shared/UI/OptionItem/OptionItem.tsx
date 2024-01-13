import './OptionItem.scss';

export type OptionItemProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export const OptionItem = ({ title, description, buttonLabel, href }: OptionItemProps) => (
  <div key={title} className="option">
    <div className="option-title">{title}</div>
    <div className="option-description">{description}</div>
    {buttonLabel && (
      <a href={href} target="_blank" rel="noreferrer" className="option-button">
        {buttonLabel}
        <span className="material-symbols-outlined arrow">arrow_forward</span>
      </a>
    )}
  </div>
);
