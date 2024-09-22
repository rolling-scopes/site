import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeroPage, type HeroPageProps } from './hero-page';
import { PAGE_NAMES } from '@/app/const';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { heroPageData } from 'data';

let heroPage: HTMLElement;
let mainTitle: HTMLElement;
let widgetTitle: HTMLElement;
let subTitles: HTMLElement[];
let image: HTMLElement;

describe('HeroPage component', () => {
  describe('School page', () => {
    const pageName = PAGE_NAMES.SCHOOL;
    const pageData: HeroPageProps = heroPageData[pageName];

    beforeEach(() => {
      renderWithRouter(<HeroPage pageName={pageName} />);
      heroPage = screen.getByTestId('hero-page');
      mainTitle = screen.getByTestId('main-title');
      widgetTitle = screen.getByTestId('widget-title');
      subTitles = screen.getAllByTestId('subtitle');
    });

    it('renders the component correctly', () => {
      expect(heroPage).toBeInTheDocument();
    });

    it('renders component content correctly', () => {
      expect(mainTitle).toBeVisible();
      expect(widgetTitle).toBeVisible();
      expect(heroPage).not.toContainHTML('img');

      expect(mainTitle.innerHTML).toBe(pageData.mainTitle);
      expect(widgetTitle.innerHTML).toBe(pageData.widgetTitle);

      subTitles.forEach((subTitle, index) => {
        expect(subTitle).toBeVisible();
        expect(subTitle.innerHTML).toBe(pageData.subTitle[index]);
      });
    });
  });

  describe('Courses page', () => {
    const pageName = PAGE_NAMES.COURSES;
    const pageData = heroPageData[pageName];

    beforeEach(() => {
      renderWithRouter(<HeroPage pageName={pageName} />);
      heroPage = screen.getByTestId('hero-page');
      mainTitle = screen.getByTestId('main-title');
      widgetTitle = screen.getByTestId('widget-title');
      image = screen.getByTestId('sloth-mascot');
    });

    it('renders the component correctly', () => {
      expect(heroPage).toBeInTheDocument();
    });

    it('renders component content correctly', () => {
      expect(mainTitle).toBeVisible();
      expect(widgetTitle).toBeVisible();
      expect(heroPage).not.toContainHTML('h3');

      expect(mainTitle.innerHTML).toBe(pageData.mainTitle);
      expect(widgetTitle.innerHTML).toBe(pageData.widgetTitle);

      expect(image).toBeVisible();
      expect(image).toHaveAttribute('src', pageData.heroImageSrc);
      expect(image).toHaveAttribute('alt', pageData.imageAltText);
    });
  });

  describe('Community page', () => {
    const pageName = PAGE_NAMES.COMMUNITY;
    const pageData = heroPageData[pageName];

    beforeEach(() => {
      renderWithRouter(<HeroPage pageName={pageName} />);
      heroPage = screen.getByTestId('hero-page');
      mainTitle = screen.getByTestId('main-title');
      widgetTitle = screen.getByTestId('widget-title');
      subTitles = screen.getAllByTestId('subtitle');
    });

    it('renders the component correctly', () => {
      expect(heroPage).toBeInTheDocument();
    });

    it('renders component content correctly', () => {
      expect(mainTitle).toBeVisible();
      expect(widgetTitle).toBeVisible();
      expect(heroPage).not.toContainHTML('img');

      expect(mainTitle.innerHTML).toBe(pageData.mainTitle);
      expect(widgetTitle.innerHTML).toBe(pageData.widgetTitle);

      subTitles.forEach((subTitle, index) => {
        expect(subTitle).toBeVisible();
        expect(subTitle.innerHTML).toBe(pageData.subTitle[index]);
      });
    });
  });
});
