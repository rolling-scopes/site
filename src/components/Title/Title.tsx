import React from 'react';

import './Title.scss';

export enum TitleType {
  Regular = 'regular',
  Big = 'big',
  ExtraBig = 'extra-big'
}
interface TitleProps {
  text: string;
  type?: TitleType;
  hasAsterix?: boolean;
  hasLines?: boolean;
  children?: any;
}

export const Title: React.FC<TitleProps> = ({
  text,
  type,
  hasAsterix,
  hasLines,
  children
}: TitleProps) => {
  const titleType = type ?? TitleType.Regular;

  return (
    <div className={`title ${titleType}`}>
      {hasLines && <span className="before">‖</span>}
      {hasAsterix && <span className="before">*</span>}
      <span>{text}</span>
      {children}
    </div>
  );
};
