import { JSX, createElement } from 'react';

export function createCourseTree(
  title: string,
  leftTitle: string,
  leftSubtitle: string,
  formattedDate: string,
  rsLogoDataUriPromise: string,
  logoCourseUriPromise: string,
): JSX.Element {
  return createElement(
    'div',
    {
      style: {
        display: 'flex',
        width: 1200,
        height: 630,
        fontFamily: 'Inter',
        weight: 400,
      },
    },
    createElement(
      'div',
      {
        style: {
          flex: 3,
          background: '#000',
          color: '#f0f2f5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
          boxSizing: 'border-box',
          gap: 25,
        },
      },
      createElement('img', {
        src: rsLogoDataUriPromise,
        width: 250,
        height: 250,
        alt: 'RS School Logo',
      }),
      createElement(
        'h1',
        {
          style: {
            fontSize: 72,
            fontWeight: 700,
            fontFamily: 'Inter',
            margin: 0,
          },
        },
        leftTitle,
      ),
      createElement(
        'p',
        {
          style: {
            fontSize: 36,
            fontFamily: 'Inter',
            fontWeight: 400,
            margin: 0,
          },
        },
        leftSubtitle,
      ),
    ),
    createElement(
      'div',
      {
        style: {
          flex: 2,
          background: '#ffda1f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 25,
          padding: 20,
          boxSizing: 'border-box',
        },
      },
      createElement('img', {
        src: logoCourseUriPromise,
        width: 250,
        height: 250,
        alt: `${title} logo`,
        style: { objectFit: 'contain' },
      }),
      createElement(
        'h2',
        {
          style: {
            fontSize: 50,
            color: '#000',
            margin: 0,
            fontFamily: 'Inter',
            fontWeight: 400,
            textAlign: 'center',
          },
        },
        `${title} Course`,
      ),
      createElement(
        'p',
        {
          style: {
            fontSize: 38,
            color: '#000',
            margin: 0,
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'italic',
            textTransform: 'uppercase',
          },
        },
        `Start: ${formattedDate}`,
      ),
    ),
  );
}
