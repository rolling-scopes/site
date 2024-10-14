import { type Mock, describe, expect, it } from 'vitest';
import { Footer } from './footer';
import { renderWithRouter } from '@/shared/__tests__/utils';

vi.mock('@/shared/hooks/use-window-size', () => ({ useWindowSize: vi.fn().mockImplementation(() => ({ width: 1200 })) }));
vi.mock('@/shared/hooks/use-data-by-name', () => ({ useDataByName: vi.fn().mockImplementation(() => ({ data: [] })) }));

describe('Footer', () => {
  it('should render without crashing', () => {
    const { getByRole } = renderWithRouter(<Footer />);
    const footerElement = getByRole('contentinfo');

    expect(footerElement).toBeInTheDocument();
  });

  it('displays logo', () => {
    const { getByTestId } = renderWithRouter(<Footer />);
    const logoElement = getByTestId('logo');

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

  it('should render mobile view', () => {
    (useWindowSize as Mock).mockReturnValueOnce({ width: 800 });

    const { getByTestId } = renderWithRouter(<Footer />);
    const mobileView = getByTestId('mobile-view');

    expect(mobileView).toBeInTheDocument();
  });

  it('should render "Community" link and correct href in mobile view', () => {
    (useWindowSize as Mock).mockReturnValueOnce({ width: 800 });

    const { getByText } = renderWithRouter(<Footer />);
    const communityLink = getByText('Community');

    expect(communityLink).toBeInTheDocument();
    expect(communityLink).toHaveAttribute('href', '/community');
  });
});
