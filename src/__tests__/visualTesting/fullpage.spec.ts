import { expect, test } from '@playwright/test';

test('Full page screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveScreenshot('origin-fullpage.png', { fullPage: true, timeout: 10000 });
});
