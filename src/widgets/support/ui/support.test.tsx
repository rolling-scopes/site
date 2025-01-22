import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Support } from './support';
import { renderWithRouter } from '@/shared/__tests__/utils';
import supportImg from '@/shared/assets/support.webp';
import boostyImg from '@/shared/assets/svg/boosty-icon.svg';
import openCollectiveImg from '@/shared/assets/svg/opencollective-icon.svg';

describe('Support Component', () => {
  const mockedData = {
    titleText: 'Support Us',
    firstParagraphText:
      /Your donations help us cover hosting, domains, licenses, and advertising for courses and events./i,
    secondParagraphText: 'Thank you for your support!',
    openCollectiveLink: 'https://opencollective.com/rsschool',
    boostyLink: 'https://boosty.to/rsschool',
    image: supportImg,
    alt: 'A sloth mascot with a piggy bank in his hands',
    sectionId: 'donate',
  };

  const {
    titleText,
    firstParagraphText,
    secondParagraphText,
    openCollectiveLink,
    boostyLink,
    image,
    alt,
    sectionId,
  } = mockedData;

  it('renders the component content correctly', () => {
    renderWithRouter(<Support />);
    const supportSection = screen.getByTestId('support-section');
    const title = screen.getByTestId('widget-title');
    const paragraphs = screen.getAllByTestId('paragraph');
    const links = screen.getAllByTestId('link-donate');
    const slothImage = screen.getByTestId('sloth-mascot');
    const openCollectiveIcon = screen.getByTestId('opencollective-icon');
    const boostyIcon = screen.getByTestId('boosty-icon');

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
    expect(paragraphs[0]).toHaveTextContent(firstParagraphText);
    expect(paragraphs[1]).toHaveTextContent(secondParagraphText);

    expect(supportSection).toHaveAttribute('id', sectionId);
    expect(links[0]).toHaveAttribute('href', openCollectiveLink);
    expect(links[1]).toHaveAttribute('href', boostyLink);
    expect(slothImage).toHaveAttribute('src', image.src);
    expect(slothImage).toHaveAttribute('alt', alt);
    expect(openCollectiveIcon).toHaveAttribute('src', openCollectiveImg.src);
    expect(boostyIcon).toHaveAttribute('src', boostyImg.src);
  });
});
