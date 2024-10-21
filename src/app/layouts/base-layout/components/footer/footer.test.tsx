import { describe, expect, it } from 'vitest';
import { Footer } from './footer';
import { renderWithRouter } from '@/shared/__tests__/utils';

vi.mock('@/shared/hooks/use-data-by-name', () => ({ useDataByName: vi.fn().mockImplementation(() => ({ data: [] })) }));

describe('Footer', () => {
  it('should render without crashing', () => {
    const { getByRole } = renderWithRouter(<Footer />);
    const footerElement = getByRole('contentinfo');

    expect(footerElement).toBeInTheDocument();
  });

  it('displays copyright in the footer', () => {
    const { getByText } = renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    const footerElement = getByText(`© ${currentYear} The Rolling Scopes`);

    expect(footerElement).toBeInTheDocument();
  });

  it('should render desktop view', () => {
    const { getByTestId } = renderWithRouter(<Footer />);
    const desktopView = getByTestId('desktop-view');

    expect(desktopView).toBeInTheDocument();
  });

  it('should render mobile view', () => {
    const { getByTestId } = renderWithRouter(<Footer />);
    const mobileView = getByTestId('mobile-view');

    expect(mobileView).toBeInTheDocument();
  });
});
