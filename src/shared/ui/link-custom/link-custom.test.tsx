import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
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
    const { getByRole } = renderWithRouter(<LinkCustom href={href} external>{label}</LinkCustom>);
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

  it('after click on link should go to http://example.com', async () => {
    renderWithRouter(
      <Routes>
        <Route path="/" element={<LinkCustom href="/about">Go to About</LinkCustom>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>,
    );
    const linkElement = screen.getByText(/Go to About/i);

    expect(screen.getByText(/Go to About/i)).toBeInTheDocument();

    await userEvent.click(linkElement);

    expect(screen.queryByText(/Go to About/i)).not.toBeInTheDocument();
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });
});
