import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MentorshipHero, type MentorshipHeroData } from './mentorship-hero';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { PAGE_NAMES } from '@/shared/constants';
import { heroPageData } from 'data';

let heroPage: HTMLElement;
let mainTitle: HTMLElement;
let subTitles: HTMLElement[];

describe('HeroPage component', () => {
  const pageData: MentorshipHeroData = heroPageData[PAGE_NAMES.MENTORSHIP];

  beforeEach(() => {
    renderWithRouter(<MentorshipHero />);
    heroPage = screen.getByTestId('mentorship-hero');
    mainTitle = screen.getByTestId('main-title');
    subTitles = screen.getAllByTestId('subtitle');
  });

  it('renders the component correctly', () => {
    expect(heroPage).toBeInTheDocument();
  });

  it('renders component content correctly', () => {
    expect(mainTitle).toBeVisible();

    expect(mainTitle.textContent).toBe(pageData.mainTitle);

    subTitles.forEach((subTitle, index) => {
      expect(subTitle).toBeVisible();
      expect(subTitle.textContent).toBe(pageData.subTitle[index]);
    });
  });
});
