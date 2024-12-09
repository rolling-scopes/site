import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Support } from './support';
import { renderWithRouter } from '@/shared/__tests__/utils';
import supportImg from '@/shared/assets/support.webp';

describe('Support Component', () => {
  const mockedData = {
    titleText: 'Support Us',
    firstParagraphText:
      /Your donations help us cover hosting, domains, licenses, and advertising for courses and events./i,
    secondParagraphText: 'Thank you for your support!',
    href: 'https://opencollective.com/rsschool',
    image: supportImg,
    alt: 'A sloth mascot with a piggy bank in his hands',
  };

  const { titleText, firstParagraphText, secondParagraphText, href, image, alt } = mockedData;

  it('renders the component content correctly', () => {
    renderWithRouter(<Support />);
    const supportSection = screen.getByTestId('support-section');
    const title = screen.getByTestId('widget-title');
    const paragraphs = screen.getAllByTestId('paragraph');
    const link = screen.getByTestId('link-custom');
    const slothImage = screen.getByTestId('sloth-mascot');

    expect(supportSection).toBeVisible();
    expect(title).toBeVisible();
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeVisible();
    });
    expect(link).toBeVisible();
    expect(slothImage).toBeVisible();

    expect(title).toHaveTextContent(titleText);
    expect(paragraphs[0]).toHaveTextContent(firstParagraphText);
    expect(paragraphs[1]).toHaveTextContent(secondParagraphText);

    expect(link).toHaveAttribute('href', href);
    expect(slothImage).toHaveAttribute('src', image.src);
    expect(slothImage).toHaveAttribute('alt', alt);
  });
});
