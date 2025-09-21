import { describe, expect, it } from 'vitest';

import { Footer } from './footer';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Copyright } from '@/widgets/footer/ui/copyright';
import { DesktopView } from '@/widgets/footer/ui/desktop-view';
import { MobileView } from '@/widgets/mobile-view';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

describe('Footer', () => {
  it('renders footer container', async () => {
    const { getByTestId } = renderWithRouter(<Footer courses={mockedCourses} mentorshipCourses={mockedCourses} />);
    const footer = getByTestId('footer');

    expect(footer).toBeInTheDocument();
  });

  describe('Copyright', () => {
    it('displays copyright in the footer', () => {
      const { getByText } = renderWithRouter(<Copyright />);
      const currentYear = new Date().getFullYear();
      const footerElement = getByText(`© ${currentYear} The Rolling Scopes`);

      expect(footerElement).toBeInTheDocument();
    });
  });

  describe('DesktopView', () => {
    it('should render desktop view', () => {
      const { getByTestId } = renderWithRouter(<DesktopView courses={mockedCourses} />);
      const desktopView = getByTestId('desktop-view');

      expect(desktopView).toBeInTheDocument();
    });
  });

  describe('MobileView', () => {
    it('should render mobile view', () => {
      const { getByTestId } = renderWithRouter(
        <MobileView courses={mockedCourses} mentorshipCourses={mockedCourses} type="footer" />,
      );
      const mobileView = getByTestId('mobile-view');

      expect(mobileView).toBeInTheDocument();
    });
  });
});
