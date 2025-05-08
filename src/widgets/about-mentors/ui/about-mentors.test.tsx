import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { AboutMentors } from './about-mentors';
import { aboutMentorsData } from 'data';

const mockProps = {
  icons: [
    {
      href: {
        src: '/test-image1.jpg',
        height: 100,
        width: 100,
        blurDataURL: 'data:image1/png;base64,mock-blur-data',
      },
      alt: 'Icon 1',
    },
    {
      href: {
        src: '/test-image1.jpg',
        height: 100,
        width: 100,
        blurDataURL: 'data:image2/png;base64,mock-blur-data',
      },
      alt: 'Icon 2',
    },
  ],
  description: ['First paragraph', 'Second paragraph'],
  lang: 'en' as const,
};

describe('AboutMentors component', () => {
  let container: HTMLElement;
  let title: HTMLElement;
  let images: HTMLElement[];

  beforeEach(() => {
    render(<AboutMentors {...mockProps} />);
    container = screen.getByTestId('about-mentors');
    title = screen.getByTestId('widget-title');
    images = screen.getAllByRole('img');
  });

  it('renders container without crashing', () => {
    expect(container).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(aboutMentorsData.en.header);
  });

  it('renders all images correctly', () => {
    expect(images).toHaveLength(mockProps.icons.length);

    images.forEach((img, index) => {
      expect(img).toBeVisible();
      expect(img).toHaveAttribute('alt', mockProps.icons[index].alt);
    });
  });

  it('renders with different language', () => {
    render(<AboutMentors {...mockProps} lang="ru" />);
    const russianTitle = screen.getByText(aboutMentorsData.ru.header);

    expect(russianTitle).toBeVisible();
  });
});
