import './button-outlined.scss';

type ButtonProps = {
  label: string;
  href: string;
};

export const ButtonOutlined = ({ label, href }: ButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="button-outlined">
      {label}
      <span className="material-symbols-outlined arrow">arrow_forward</span>
    </a>
  );
};
