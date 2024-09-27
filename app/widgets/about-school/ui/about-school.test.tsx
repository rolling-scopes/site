import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutSchool } from './about-school';

describe('AboutSchool component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let text: HTMLElement[];

  beforeEach(() => {
    render(<AboutSchool />);
    widget = screen.getByTestId('about-school');
    title = screen.getByTestId('widget-title');
    text = screen.getAllByTestId('paragraph');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('About RS School');
  });

  it('displays correct text', () => {
    text.forEach((paragraph) => {
      expect(paragraph).toBeVisible();
      expect(paragraph).not.toBeEmptyDOMElement();
      expect(paragraph.innerHTML).not.toBeNull();
    });
  });
});
