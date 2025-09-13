import { Fragment, ReactNode } from 'react';

export const replaceTextBreaksWithBrTag = (text: string) =>
  text
    .split('\n')
    .reduce<ReactNode[]>(
      (children, textSegment, index) => [
        ...children,
        index > 0 && (
          <Fragment key={index}>
            <br className="embedded-text-break" />
            <span className="embedded-space"> </span>
          </Fragment>
        ),
        textSegment,
      ],
      [],
    )
    .filter(Boolean);
