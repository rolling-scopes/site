import React from 'react';

import './Tag.scss';

export enum TagColor {
  Light = 'light',
  Dark = 'dark'
}

type TagProps = {
  id: string;
  label: string;
  color?: TagColor;
};

export const Tag: React.FC<TagProps> = ({ id, label, color = TagColor.Dark }: TagProps) => (
  <a className={`tag ${color}`} href={`#${id}`}>
    {label}
  </a>
);
