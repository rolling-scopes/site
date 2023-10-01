import React from 'react';

import './Tag.scss';

type TagProps = {
  text?: string;
};

export const Tag: React.FC<TagProps> = ({ text }: TagProps) => <div className="tag">{text}</div>;
