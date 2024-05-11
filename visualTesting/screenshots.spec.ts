import { expect, test } from '@playwright/test';

test('Full page screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('origin-fullpage.png', { fullPage: true, timeout: 10000 });
});

test('Navbar sections screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.navbar')).toHaveScreenshot('navbar.png', { timeout: 10000 });
});

test('Footer section screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer')).toHaveScreenshot('footer.png', { timeout: 10000 });
});
