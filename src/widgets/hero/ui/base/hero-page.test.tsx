import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HeroPage, type HeroPageProps } from './hero-page';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { PAGE_NAMES } from '@/shared/constants';
import { heroPageData } from 'data';

const pages = [{ name: PAGE_NAMES.COMMUNITY }];

let heroPage: HTMLElement;
let mainTitle: HTMLElement;
let widgetTitle: HTMLElement;
let subTitles: HTMLElement[];

describe('HeroPage component', () => {
  pages.forEach(({ name }) => {
    describe(`${name} page`, () => {
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

        expect(mainTitle.textContent).toBe(pageData.mainTitle);
        expect(widgetTitle.textContent).toBe(pageData.widgetTitle);

        subTitles.forEach((subTitle, index) => {
          expect(subTitle).toBeVisible();
          expect(subTitle.textContent).toBe(pageData.subTitle[index]);
        });

        const image = screen.queryByTestId('sloth-mascot');

        expect(image).toBeNull();
      });
    });
  });
});
