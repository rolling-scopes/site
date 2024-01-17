import React from 'react';

import './Tag.scss';

type TagProps = {
  id?: string;
  label: string;
};

export const Tag: React.FC<TagProps> = ({ id, label }: TagProps) => (
  <a className="tag" href={`#${id}`}>
    {label}
  </a>
);
