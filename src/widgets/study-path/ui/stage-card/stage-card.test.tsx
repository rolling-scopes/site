import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StageCard } from './stage-card';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import type { StageCardProps } from 'data';

const mockProps: StageCardProps = {
  id: 1,
  title: 'Test title',
  intro: 'Test description for the card.',
  modules: [
    {
      id: 1,
      text: 'Test module 1',
      links: [
        {
          id: 1,
          text: '',
          title: 'Test link 1',
          link: 'https://test1.com',
          external: false,
        },
      ],
      marked: false,
    },
    {
      id: 2,
      text: 'Test module 2',
      links: [
        {
          id: 1,
          text: '',
          title: 'Test link 2',
          link: 'https://test2.com',
          external: false,
        },
      ],
      marked: false,
    },
  ],
  image: {
    src: MOCKED_IMAGE_PATH,
    alt: 'TestTitle',
    className: 'stage-image',
  },
};

describe('StageCard component', () => {
  beforeEach(() => {
    render(<StageCard {...mockProps} />);
  });

  it('displays correct stage number', () => {
    const stageStep = screen.getByTestId('stage-step');

    expect(stageStep).toBeVisible();
    expect(stageStep).toHaveTextContent(mockProps.id.toString());
  });

  it('displays correct title', () => {
    const title = screen.getByTestId('subtitle');

    expect(title).toBeVisible();
    expect(title).toHaveTextContent(mockProps.title);
  });

  it('displays correct intro', () => {
    const intro = screen.getByTestId('paragraph');

    expect(intro).toBeVisible();
    expect(intro).toHaveTextContent(mockProps.intro);
  });

  it('displays correct all modules (unmarked)', () => {
    const list = screen.getByTestId('list');
    const modules = screen.getAllByTestId('list-item');

    expect(list.className).not.toContain('marked');
    expect(modules).toHaveLength(mockProps.modules.length);

    modules.forEach((item, i) => {
      expect(item).toBeVisible();
      expect(item).toHaveTextContent(mockProps.modules[i].text);
    });
  });

  it('displays correct links', () => {
    const modules = screen.getAllByTestId('list-item');

    modules.forEach((item, i) => {
      const itemLinks = item.getElementsByTagName('a');

      Array.from(itemLinks).forEach((itemLink, j) => {
        const { title, link } = mockProps.modules[i].links[j];

        expect(itemLink).toBeVisible();
        expect(itemLink).toHaveTextContent(title);
        expect(itemLink).toHaveAttribute('href', link);
        expect(itemLink.className).not.toContain('external');
      });
    });
  });

  it('renders correct picture', () => {
    const picture = screen.getByTestId('stage-picture');
    const { src, alt } = mockProps.image;

    expect(picture).toBeVisible();
    expect(picture).toHaveAttribute('src', src?.src);
    expect(picture).toHaveAttribute('alt', alt);
  });
});
