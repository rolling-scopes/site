import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cards } from './constants';

import { Principles } from './ui/principle-card/principles';

describe('Principles', () => {
  beforeEach(() => {
    render(<Principles />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText(
      /RS School Principles are an ability to complete our mission/i,
    );

    expect(titleElement).toBeVisible();
  });

  it('renders PrincipleCards correctly', () => {
    cards.forEach(({ title, description }) => {
      const titleElement = screen.getByText(title);
      const descriptionElement = screen.getByText(description);

      expect(titleElement).toBeVisible();
      expect(descriptionElement).toBeVisible();
    });
  });

  it('renders the correct number of PrincipleCards', () => {
    const principleCards = document.getElementsByClassName('principle-card');

    expect(principleCards).toHaveLength(cards.length);
  });
});
