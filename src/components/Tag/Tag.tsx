import React from 'react';

import './Tag.scss';

type TagProps = {
  id?: string;
  label: string;
  isClickable: boolean;
};

export const Tag: React.FC<TagProps> = ({ id, label, isClickable }: TagProps) => {
  if (isClickable) {
    return (
      <a className="tag clickable" href={`#${id}`}>
        {label}
      </a>
    );
  }

  return <div className="tag">{label}</div>;
};
