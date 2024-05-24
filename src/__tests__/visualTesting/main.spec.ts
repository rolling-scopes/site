import { expect, test } from '@playwright/test';

test('Main page full screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveScreenshot('main.png', {
    fullPage: true,
    timeout: 10000,
    mask: [page.getByTestId('courses')],
  });
});
