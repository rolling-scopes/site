import React, { useState } from 'react';
import { useWindowSize } from '../../hooks';
import './PrincipleCard.scss';

export interface PrincipleCardProps {
  title: string;
  description: string;
  Icon: React.FC;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({
  title,
  description,
  Icon
}: PrincipleCardProps) => (
  <div className="principle-card">
    <div className="accent" />
    <Icon />
    <>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </>

    <div className="accent-corner" />
  </div>
);
