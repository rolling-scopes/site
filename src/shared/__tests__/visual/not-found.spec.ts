import { expect, test } from '@playwright/test';
import { takeScreenshot } from './utils';
import { ROUTES } from '@/core/const';

test('Not-found page', async ({ page }) => {
  await page.goto(ROUTES.NOT_FOUND);

  await takeScreenshot(page, 'Not-found page');
});

test('Not-found home button', async ({ page }) => {
  await page.goto(ROUTES.NOT_FOUND);

  const homeButton = await page.getByTestId('home-link');

  expect(homeButton).toBeVisible();
  await homeButton.click();
  await expect(page).toHaveURL(ROUTES.HOME);
});
