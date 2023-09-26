import React from 'react';

import './Subtitle.scss';

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }: SubtitleProps) => (
  <div className="subtitle">{text}</div>
);
