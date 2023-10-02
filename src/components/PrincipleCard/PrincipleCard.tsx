import React from 'react';
import './PrincipleCard.scss';

export interface PrincipleCardProps {
  icon: React.ReactNode;
  text: string;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, text }: PrincipleCardProps) => (
  <div className="principle-card">
    <div className="accent" />
    {icon}
    <div className="text">{text}</div>
    <div className="accent-corner" />
  </div>
);
