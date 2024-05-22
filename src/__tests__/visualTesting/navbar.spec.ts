import { expect, test } from '@playwright/test';

test('Navbar sections screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.navbar')).toHaveScreenshot('navbar.png', { timeout: 10000 });
});
