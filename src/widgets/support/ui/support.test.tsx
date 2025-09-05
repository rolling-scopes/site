import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Support } from './support';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Paragraph } from '@/shared/ui/paragraph';

describe('Support Component', () => {
  const mockedData = {
    titleText: 'Support Us',
    paragraphText:
      /Your donations help us cover hosting, domains, licenses, and advertising for courses and events. Thank you for your support!/i,
    openCollectiveLink: 'https://opencollective.com/rsschool',
    boostyLink: 'https://boosty.to/rsschool',
    sectionId: 'donate',
  };

  const { titleText, paragraphText, openCollectiveLink, boostyLink, sectionId } = mockedData;

  it('renders the component content correctly', () => {
    renderWithRouter(
      <Support
        title="Support Us"
        content={(
          <Paragraph>
            Your donations help us cover hosting, domains, licenses, and advertising for courses and
            events. Thank you for your support!
          </Paragraph>
        )}
        linkUrlLeft="https://opencollective.com/rsschool"
        linkUrlRight="https://boosty.to/rsschool"
        imageSrc={MOCKED_IMAGE_PATH}
        linkLabelLeft="Support us"
        linkLabelRight="Support us"
        linkIconLeft={MOCKED_IMAGE_PATH}
        linkIconRight={MOCKED_IMAGE_PATH}
      />,
    );
    const supportSection = screen.getByTestId('support-section');
    const title = screen.getByTestId('widget-title');
    const paragraphs = screen.getAllByTestId('paragraph');
    const links = screen.getAllByTestId('link-donate');
    const slothImage = screen.getByTestId('sloth-mascot');

    expect(supportSection).toBeVisible();
    expect(title).toBeVisible();
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeVisible();
    });
    expect(slothImage).toBeVisible();
    links.forEach((link) => {
      expect(link).toBeVisible();
    });
    expect(links).toHaveLength(2);

    expect(title).toHaveTextContent(titleText);
    expect(paragraphs[0]).toHaveTextContent(paragraphText);

    expect(supportSection).toHaveAttribute('id', sectionId);
    expect(links[0]).toHaveAttribute('href', openCollectiveLink);
    expect(links[1]).toHaveAttribute('href', boostyLink);
    expect(slothImage).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
  });
});
