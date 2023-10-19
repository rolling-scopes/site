import React from 'react';

import './Button.scss';

type ButtonProps = {
  label: string;
  href: string;
};

export const Button: React.FC<ButtonProps> = ({ label, href }: ButtonProps) => (
  <a className="button" href={href} target="_blank" rel="noreferrer">
    <span className="label">{label}</span>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.2 12.5681L15.7 21.5681H12.2L17.7 14.0681H2V11.0681H17.7L12.2 3.56812H15.7L22.2 12.5681Z"
        fill="white"></path>
    </svg>
  </a>
);
