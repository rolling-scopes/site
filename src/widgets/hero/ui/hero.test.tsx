import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Hero } from '@/widgets/hero';

describe('Hero component', () => {
  beforeEach(() => {
    renderWithRouter(
      <Hero
        heading="headingTest"
        subHeading="subHeadingTest"
        topHeading="topHeadingTest"
        image={MOCKED_IMAGE_PATH}
      />,
    );
  });

  it('renders the component correctly', () => {
    const heroPage = screen.getByTestId('hero-section');

    expect(heroPage).toBeInTheDocument();
  });

  it('renders component content correctly', () => {
    const mainTitle = screen.getByTestId('main-title');
    const subTitle = screen.getByTestId('subtitle');
    const widgetTitle = screen.getByTestId('widget-title');
    const image = screen.getByTestId('hero-image');

    expect(mainTitle).toBeVisible();
    expect(widgetTitle).toBeVisible();

    expect(mainTitle.textContent).toBe('headingTest');
    expect(widgetTitle.textContent).toBe('subHeadingTest');

    expect(subTitle).toBeVisible();
    expect(subTitle.textContent).toBe('topHeadingTest');

    expect(image).toBeVisible();
  });
});
