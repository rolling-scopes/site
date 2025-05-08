import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LinkCustom } from './link-custom';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('LinkCustom', () => {
  const label = 'Click me';
  const href = 'http://example.com';

  it('renders without crashing', () => {
    renderWithRouter(<LinkCustom href={href}>{label}</LinkCustom>);
    expect(screen.getByText(label)).toBeDefined();
  });

  it('displays the correct label text', () => {
    renderWithRouter(<LinkCustom href={href}>{label}</LinkCustom>);
    expect(screen.getByText(label)).toBeDefined();
  });

  it('renders correctly when given right props', () => {
    const label = 'Test Label';
    const href = 'http://test.com';
    const { getByRole } = renderWithRouter(<LinkCustom href={href}>{label}</LinkCustom>);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', href);
    expect(link.textContent).toContain(label);
  });

  it('should be external', () => {
    const { getByRole } = renderWithRouter(
      <LinkCustom href={href} external>
        {label}
      </LinkCustom>,
    );
    const link = getByRole('link');

    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent('Click me');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should be inner', () => {
    const { getByRole } = renderWithRouter(<LinkCustom href={href}>{label}</LinkCustom>);
    const link = getByRole('link');

    expect(link).not.toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).not.toHaveAttribute('target', '_blank');
  });

  it('renders TextLinkIcon when link is external and variant is textLink', () => {
    renderWithRouter(
      <LinkCustom href="/" variant="textLink" external>
        {label}
      </LinkCustom>,
    );

    const icon = screen.getByTestId('text-link-icon');

    expect(icon).toBeInTheDocument();
  });

  it('does not render ArrowIcon when variant is primary', () => {
    renderWithRouter(
      <LinkCustom href="/" variant="primary">
        {label}
      </LinkCustom>,
    );

    const icon = screen.queryByTestId('arrow-icon');

    expect(icon).toBeNull();
  });

  it('renders ArrowIcon with small size when variant is rounded', () => {
    renderWithRouter(
      <LinkCustom href="/" variant="rounded">
        {label}
      </LinkCustom>,
    );

    const icon = screen.getByTestId('arrow-icon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('height', '1');
  });

  it('renders provided icon when icon prop is passed', () => {
    const CustomIcon = () => <div data-testid="custom-icon">custom</div>;

    renderWithRouter(
      <LinkCustom href="/" variant="primary" icon={<CustomIcon />}>
        {label}
      </LinkCustom>,
    );

    const providedIcon = screen.getByTestId('custom-icon');
    const defaultIcon = screen.queryByTestId('arrow-icon');

    expect(providedIcon).toBeInTheDocument();
    expect(defaultIcon).toBeNull();
  });
});
