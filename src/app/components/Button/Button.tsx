import './Button.scss';

type ButtonProps = {
  label: string;
  href: string;
};

export const Button = ({ label, href }: ButtonProps) => (
  <a className="button" href={href} target="_blank" rel="noreferrer">
    <span className="label">{label}</span>
    <span className="material-symbols-outlined arrow">arrow_forward</span>
  </a>
);
