import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithRouter } from '@/shared/__tests__/utils';
import AboutImage from '@/shared/assets/about.webp';
import { Paragraph } from '@/shared/ui/paragraph';
import { MentorshipHero } from '@/widgets/hero';

let heroPage: HTMLElement;
let mainTitle: HTMLElement;
let subTitles: HTMLElement[];

describe('HeroPage component', () => {
  beforeEach(() => {
    renderWithRouter(
      <MentorshipHero
        heading="heading"
        subHeading={<Paragraph>subHeading</Paragraph>}
        topHeading={['topHeading']}
        image={AboutImage}
      />,
    );
    heroPage = screen.getByTestId('mentorship-hero');
    mainTitle = screen.getByTestId('main-title');
    subTitles = screen.getAllByTestId('subtitle');
  });

  it('renders the component correctly', () => {
    expect(heroPage).toBeInTheDocument();
  });

  it('renders component content correctly', () => {
    expect(mainTitle).toBeVisible();

    expect(mainTitle.textContent).toBe('heading');

    subTitles.forEach((subTitle) => {
      expect(subTitle).toBeVisible();
      expect(subTitle.textContent).toBe('topHeading');
    });
  });
});
