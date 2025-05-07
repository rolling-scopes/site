import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { AwsBadge } from './aws-badge';
import imageAws from '@/shared/assets/aws-cloud-pract-badge.webp';

describe('AwsBadge component', () => {
  const descriptions = [/Upon completing the course/i];

  let widget: HTMLElement;
  let title: HTMLElement;
  let paragraphs: HTMLElement[];

  beforeEach(() => {
    render(<AwsBadge />);
    widget = screen.getByTestId('aws-badge');
    title = screen.getByTestId('widget-title');
    paragraphs = screen.getAllByTestId('paragraph');
  });

  it('renders correct content for component', () => {
    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('AWS Cloud Practitioner');

    descriptions.forEach((description) => {
      const matches = paragraphs.some((item) => description.test(item.textContent || ''));

      expect(matches).toBe(true);
    });
  });

  it('renders correct image with alt text', () => {
    const image = screen.getByTestId('aws-badge-img');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt', expect.stringContaining('AWS Digital Badge'));
    expect(image).toHaveAttribute('src', imageAws.src);
  });
});
