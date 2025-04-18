import { describe, expect, it } from 'vitest';

import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Copyright } from '@/widgets/footer/ui/copyright';
import { DesktopView } from '@/widgets/footer/ui/desktop-view';
import { MobileView } from '@/widgets/mobile-view';

describe('Footer', () => {
  it('displays copyright in the footer', () => {
    const { getByText } = renderWithRouter(<Copyright />);
    const currentYear = new Date().getFullYear();
    const footerElement = getByText(`© ${currentYear} The Rolling Scopes`);

    expect(footerElement).toBeInTheDocument();
  });

  it('should render desktop view', async () => {
    const desktopViewElem = await DesktopView();
    const { getByTestId } = renderWithRouter(desktopViewElem);
    const desktopView = getByTestId('desktop-view');

    expect(desktopView).toBeInTheDocument();
  });

  it('should render mobile view', () => {
    const { getByTestId } = renderWithRouter(<MobileView courses={mockedCourses} type="footer" />);
    const mobileView = getByTestId('mobile-view');

    expect(mobileView).toBeInTheDocument();
  });
});
