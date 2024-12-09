import { expect, test } from '@playwright/test';
import { ROUTES } from '@/core/const';

test('Not-found home button', async ({ page }) => {
  await page.goto(ROUTES.NOT_FOUND);

  const homeButton = await page.getByTestId('home-link');

  expect(homeButton).toBeVisible();
  await homeButton.click();
  await expect(page).toHaveURL(ROUTES.HOME);
});
