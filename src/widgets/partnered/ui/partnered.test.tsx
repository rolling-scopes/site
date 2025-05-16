import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Partnered } from './partnered';
import { partners } from '../constants';
import aws from '@/shared/assets/icons/aws-gray.svg';
import github from '@/shared/assets/svg/github.svg';
import jetbrains from '@/shared/assets/svg/jetbrains.svg';

describe('Partnered component', () => {
  it('renders correct content for component', async () => {
    render(<Partnered />);

    const title = await screen.findByTestId('widget-title');
    const partnersList = await screen.findByTestId('partners-list');

    expect(title).toBeVisible();
    expect(title.textContent).toBe('Partnered with');

    expect(partnersList).toBeVisible();
    expect(partnersList.children).toHaveLength(partners.length);
  });

  it('renders the title and logos correctly', () => {
    render(<Partnered />);

    const logos = screen.getAllByRole('img');

    expect(logos).toHaveLength(3);

    expect(screen.getByAltText('jetbrains icon')).toHaveAttribute('src', jetbrains.src);
    expect(screen.getByAltText('AWS icon')).toHaveAttribute('src', aws.src);
    expect(screen.getByAltText('github icon')).toHaveAttribute('src', github.src);
  });
});
