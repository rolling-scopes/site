import { JSX, createElement } from 'react';

export function createPageTree(
  title: string,
  description: string,
  rsBannerUri: string,
  rsMascotsUri: string,
  mapBgUri: string,
): JSX.Element {
  return createElement(
    'div',
    {
      style: {
        width: 1200,
        height: 630,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'flex-start',
        padding: '100px 80px',
        margin: 0,
        backgroundColor: '#fff',
        fontFamily: 'Inter',
        color: '#000',
        boxSizing: 'border-box',
        position: 'relative',
      },
    },

    createElement('img', {
      src: mapBgUri,
      alt: 'RS Logo',
      height: 630,
      style: {
        position: 'absolute',
        top: 0,
        right: 120,
        objectFit: 'contain',
      },
    }),

    createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 30,
          margin: 0,
        },
      },

      createElement(
        'h1',
        {
          style: {
            fontFamily: 'Inter',
            fontSize: 82,
            fontWeight: 700,
            margin: 0,
          },
        },
        `${title}`,
      ),

      createElement(
        'p',
        {
          style: {
            fontFamily: 'Inter',
            fontSize: 34,
            fontWeight: 400,
            color: '#000',
            width: '700px',
            margin: 0,
          },
        },
        `${description}`,
      ),
    ),

    createElement(
      'div',
      {
        style: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          position: 'absolute',
          bottom: 45,
          left: 50,
        },
      },

      createElement('img', {
        src: rsMascotsUri,
        alt: 'RS mascots',
        width: 430,
        style: { objectFit: 'contain' },
      }),
    ),

    createElement('div', {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100vw',
        height: '36px',
        backgroundColor: '#ffda1f',
      },
    }),

    createElement('img', {
      src: rsBannerUri,
      alt: 'RS Logo',
      width: 300,
      height: 300,
      style: {
        position: 'absolute',
        top: 60,
        right: 70,
        objectFit: 'contain',
      },
    }),
  );
}
