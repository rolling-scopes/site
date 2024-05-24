import { expect, test } from '@playwright/test';

test('Main page full screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveScreenshot('main-fullpage.png', { fullPage: true, timeout: 10000 });
});
