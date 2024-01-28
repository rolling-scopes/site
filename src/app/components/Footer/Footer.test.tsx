import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from '.';

describe('Footer', () => {
  it('should render without crashing', () => {
    const { getByRole } = render(<Footer />);
    const footerElement = getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('displays copyright in the footer', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    const footerElement = getByText(`© ${currentYear} The Rolling Scopes`);
    expect(footerElement).toBeInTheDocument();
  });
});
