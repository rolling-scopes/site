import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { AboutCommunity } from './about-community';

describe('AboutCommunity component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let text: HTMLElement[];

  beforeEach(() => {
    render(<AboutCommunity />);
    widget = screen.getByTestId('about-community');
    title = screen.getByTestId('widget-title');
    text = screen.getAllByTestId('paragraph');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Who we are');
  });

  it('displays correct text', () => {
    text.forEach((paragraph) => {
      expect(paragraph).toBeVisible();
      expect(paragraph).not.toBeEmptyDOMElement();
      expect(paragraph.innerHTML).not.toBeNull();
    });
  });

  it('renders the image correctly', () => {
    const imageElement = screen.getByAltText('Sloth mascot dressed in a red superhero cape');

    expect(imageElement).toBeVisible();
  });
});
