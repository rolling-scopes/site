import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { AwsBadge } from './aws-badge';

describe('AwsBadge component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let text: HTMLElement[];

  beforeEach(() => {
    render(<AwsBadge />);
    widget = screen.getByTestId('aws-badge');
    title = screen.getByTestId('widget-title');
    text = screen.getAllByTestId('paragraph');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('AWS DIGITAL BADGE');
  });

  it('displays correct text', () => {
    text.forEach((paragraph) => {
      expect(paragraph).toBeVisible();
      expect(paragraph).not.toBeEmptyDOMElement();
      expect(paragraph.innerHTML).not.toBeNull();
    });
  });

  it('renders the image correctly', () => {
    const imageElement = screen.getByAltText('AWS Digital Badge');

    expect(imageElement).toBeVisible();
  });
});
