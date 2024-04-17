import { Arrow } from '@/icons/arrow';

import './button.scss';

export type ButtonProps = {
  label: string;
  href: string;
};

export const MakeBtnTemp = (isOutlined: boolean) => {
  const btnClass = isOutlined ? 'button-outlined' : 'button';
  return ({ label, href }: ButtonProps) => (
    <a className={btnClass} href={href} target="_blank" rel="noreferrer">
      {isOutlined ? label : <span className="label">{label}</span>}
      <span className="arrow">
        <Arrow />
      </span>
    </a>
  );
};

export const Button = MakeBtnTemp(false);
