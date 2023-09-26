import React from 'react';

import './Title.scss';

interface TitleProps {
  text: string;
  asterix: boolean;
}

export const Title: React.FC<TitleProps> = ({ text, asterix }: TitleProps) => (
  <div className={asterix ? 'title asterix' : 'title'}>{text}</div>
);
