import { expect, test } from '@playwright/test';

test('Community page full screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/community');
  await page.waitForSelector('footer');

  await expect(page).toHaveScreenshot('community.png', {
    fullPage: true,
    timeout: 10000,
    mask: [
      page.getByTestId('places'),
      page.getByTestId('courses-list'),
      page.getByTestId('next-events'),
    ],
  });
});
