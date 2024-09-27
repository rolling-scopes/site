import { ReactNode } from 'react';

import './principle-card.scss';

export interface PrincipleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const PrincipleCard = ({ title, description, icon }: PrincipleCardProps) => (
  <div className="principle-card">
    <div className="card-header">
      <div className="icon-wrapper">
        <div className="accent" />
        <span>{icon}</span>
      </div>
      <div className="card-title">{title}</div>
    </div>
    <div className="card-description">{description}</div>
    <div className="accent-corner" />
  </div>
);
