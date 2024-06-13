import { type Mock, describe, expect, it } from 'vitest';
import { Footer } from './footer';
import { renderWithRouter } from '@/__tests__/utils';
import { useWindowSize } from '@/app/hooks';

vi.mock('@/app/hooks', () => ({
  useWindowSize: vi.fn().mockImplementation(() => ({ width: 1200 })),
  useDataByName: vi.fn().mockImplementation(() => ({ data: [] })),
}));

describe('Footer', () => {
  it('should render without crashing', () => {
    const { getByRole } = renderWithRouter(<Footer />);
    const footerElement = getByRole('contentinfo');

    expect(footerElement).toBeInTheDocument();
  });

  it('displays logo', () => {
    const { getByTestId } = renderWithRouter(<Footer />);
    const logoElement = getByTestId('logo-footer');

    expect(logoElement).toBeInTheDocument();
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

  it('should render mobile view and have correct class - mobile-view', () => {
    (useWindowSize as Mock).mockReturnValueOnce({ width: 800 });

    const { getByTestId } = renderWithRouter(<Footer />);
    const mobileView = getByTestId('mobile-view');

    expect(mobileView).toBeInTheDocument();
    expect(mobileView).toHaveClass('mobile-view');
  });

  it('should render "About Community" link and correct href in mobile view', () => {
    (useWindowSize as Mock).mockReturnValueOnce({ width: 800 });

    const { getByText } = renderWithRouter(<Footer />);
    const aboutLink = getByText('About Community');

    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/community/#about');
  });
});
