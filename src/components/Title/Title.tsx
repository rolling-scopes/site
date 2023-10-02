import React from 'react';

import './Title.scss';

interface TitleProps {
  text: string;
  asterix: boolean;
  extra?: boolean;
}

export const Title: React.FC<TitleProps> = ({ text, asterix, extra }: TitleProps) => {
  let classNames = 'title';

  if (asterix) {
    classNames += ' asterix';
  }

  if (extra) {
    classNames += ' extra';
  }

  return <div className={classNames}>{text}</div>;
};
