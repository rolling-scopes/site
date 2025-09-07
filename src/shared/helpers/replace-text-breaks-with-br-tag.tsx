import { ReactNode } from 'react';

export const replaceTextBreaksWithBrTag = (text: string) =>
  text
    .split('\n')
    .reduce<ReactNode[]>(
      (children, textSegment, index) => [...children, index > 0 && <br key={index} />, textSegment],
      [],
    )
    .filter(Boolean);
