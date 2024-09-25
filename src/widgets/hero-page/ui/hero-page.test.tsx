import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeroPage, type HeroPageProps } from './hero-page';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { PAGE_NAMES } from '@/shared/constants';
import { heroPageData } from 'data';

const pages = [
  { name: PAGE_NAMES.SCHOOL },
  { name: PAGE_NAMES.COURSES },
  { name: PAGE_NAMES.COMMUNITY },
];

let heroPage: HTMLElement;
let mainTitle: HTMLElement;
let widgetTitle: HTMLElement;
let subTitles: HTMLElement[];

describe('HeroPage component', () => {
  pages.forEach(({ name }) => {
    describe(`${name} page`, () => {
      const pageName = name;
      const pageData: HeroPageProps = heroPageData[name];

      beforeEach(() => {
        renderWithRouter(<HeroPage pageName={name} />);
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
        // expect(heroPage).not.toContainHTML('img');

        expect(mainTitle.innerHTML).toBe(pageData.mainTitle);
        expect(widgetTitle.innerHTML).toBe(pageData.widgetTitle);

        subTitles.forEach((subTitle, index) => {
          expect(subTitle).toBeVisible();
          expect(subTitle.innerHTML).toBe(pageData.subTitle[index]);
        });

        if (pageName === PAGE_NAMES.COURSES) {
          const image: HTMLElement = screen.getByTestId('sloth-mascot');

          expect(image).toBeVisible();
          expect(image).toHaveAttribute('src', pageData.heroImageSrc);
          expect(image).toHaveAttribute('alt', pageData.imageAltText);
        } else {
          expect(heroPage).not.toContainHTML('img');
        }
      });
    });
  });
});
