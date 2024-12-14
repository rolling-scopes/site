import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import speakersWanted from '@/shared/assets/speakers-wanted.webp';
import { Speakers } from '@/widgets/speakers';

describe('Speakers', () => {
  beforeEach(() => {
    render(<Speakers />);
  });

  it('renders the content correctly', () => {
    const titleElement = screen.getByText('Speakers wanted');
    const paragraphs = screen.getAllByTestId('paragraph');
    const nameElement = screen.getByTestId('subtitle');
    const emailElement = screen.getByText('rolling.scopes@gmail.com');
    const imageElement = screen.getByTestId('sloth-image');

    expect(titleElement).toBeVisible();
    expect(paragraphs.length).toBe(2);

    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toBeVisible();
    expect(emailElement).toBeVisible();

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', speakersWanted.src);
  });
});
