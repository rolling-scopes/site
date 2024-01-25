import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import { Principles } from './Principles';
import { cards } from './Principles'; // Assuming it's exported from the file

describe('Principles', () => {
  beforeEach(() => {
    render(<Principles />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText(
      /RS School Principles are an ability to complete our mission/i
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
