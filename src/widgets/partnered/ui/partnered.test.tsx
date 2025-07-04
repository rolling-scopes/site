import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Partnered } from './partnered';
import { partners } from '../constants';
import aws from '@/shared/assets/icons/aws-gray.svg';
import github from '@/shared/assets/svg/github.svg';
import jetbrains from '@/shared/assets/svg/jetbrains.svg';

const partnersLogoData = [
  {
    testId: 'jetbrains icon',
    alt: 'jetbrains icon',
    src: jetbrains.src,
  },
  {
    testId: 'AWS icon',
    alt: 'AWS icon',
    src: aws.src,
  },
  {
    testId: 'github icon',
    alt: 'github icon',
    src: github.src,
  },
];

describe('Partnered component', () => {
  beforeEach(() => {
    render(<Partnered />);
  });
  it('renders correct content for component', async () => {
    const title = await screen.findByTestId('widget-title');
    const partnersList = await screen.findByTestId('partners-list');

    expect(title).toBeVisible();
    expect(title.textContent).toBe('Partnered with');

    expect(partnersList).toBeVisible();
    expect(partnersList.children).toHaveLength(partners.length);
  });

  it.each(partnersLogoData)(
    'renders $testId logo with correct attributes',
    ({ testId, alt, src }) => {
      const logo = screen.getByTestId(testId);

      expect(logo).toHaveAttribute('alt', alt);
      expect(logo).toHaveAttribute('src', src);
    },
  );
});
