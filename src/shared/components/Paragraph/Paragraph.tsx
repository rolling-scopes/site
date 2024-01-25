import React from 'react';

import './Paragraph.scss';

type ParagraphProps = {
  children?: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <div className="paragraph" data-testid="my-paragraph">
    {children}
  </div>
);
