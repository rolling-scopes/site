import { expect, test } from '@playwright/test';
import { VIEWPORTS, takeScreenshot } from './utils';
import { ROUTES } from '@/core/const';

test('Main page', async ({ page }) => {
  await page.goto(ROUTES.HOME);

  await takeScreenshot(page, 'Main page');
});

test('Main page mobile', async ({ page }) => {
  await page.setViewportSize({
    width: VIEWPORTS['mobile-width'],
    height: VIEWPORTS['mobile-height'],
  });

  await page.goto(ROUTES.HOME);

  await page.getByTestId('burger').click();

  const mobileMenu = page.getByTestId('mobile-menu');

  expect(mobileMenu).toBeInViewport();

  await takeScreenshot(page, 'Main page mobile - menu open');

  await page.getByTestId('burger').click();
  await expect(mobileMenu).not.toBeInViewport();
});
