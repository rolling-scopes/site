import React from 'react';
import './PrincipleCard.scss';

export interface PrincipleCardProps {
  text: string;
  Icon: React.FC;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ text, Icon }: PrincipleCardProps) => (
  <div className="principle-card">
    <div className="accent" />
    <Icon />
    <div className="text">{text}</div>
    <div className="accent-corner" />
  </div>
);
