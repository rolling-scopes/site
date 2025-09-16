import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Paragraph } from '@/shared/ui/paragraph';
import { MentorshipHero } from '@/widgets/hero';

let heroPage: HTMLElement;
let mainTitle: HTMLElement;
let subTitles: HTMLElement[];

describe('Hero Mentorship component', () => {
  beforeEach(() => {
    renderWithRouter(
      <MentorshipHero
        heading="heading"
        subHeading={<Paragraph>subHeading</Paragraph>}
        topHeading={['topHeading']}
        image={MOCKED_IMAGE_PATH}
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
